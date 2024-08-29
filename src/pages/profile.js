import React, { useState, useEffect } from 'react';
import { Button, Stack, TextField, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router-dom';
import { getAuth, updatePassword, verifyBeforeUpdateEmail, sendEmailVerification, reauthenticateWithCredential, EmailAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import withAuth from '../utils/withAuth';
import '../styles/common.css';

function Profile() {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPoints, setIsEditingPoints] = useState(false);

    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [imagePreview, setImagePreview] = useState('');

    const [name, setName] = useState('');
    const [originalName, setOriginalName] = useState('');
    const [email, setEmail] = useState('');
    const [points, setPoints] = useState(0);

    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setName(userData.name || '');
                    setOriginalName(userData.name || '');
                    setEmail(userData.email || '');
                    setPoints(userData.points || 0);
                    if (userData.profilePic) {
                        setImagePreview(userData.profilePic);
                    }
                }
            }
        };

        fetchUserData();
    }, [user, db]);

    const handleSaveName = async () => {
        try {
            await updateDoc(doc(db, 'users', user.uid), { name });
            setOriginalName(name);
            setIsEditingName(false);
            alert('Name updated successfully!');
        } catch (error) {
            console.error('Error updating name:', error);
            alert('Failed to update name. Please try again.');
        }
    };

    const handleCancelNameEdit = () => {
        setName(originalName);
        setIsEditingName(false);
    };

    async function reauthenticateUntilSuccess(user, email, password) {
        const credential = EmailAuthProvider.credential(email, password);
        const maxRetries = 6; // Set a limit to prevent infinite loops
        let attempt = 0;
      
        while (attempt < maxRetries) {
          try {
            await reauthenticateWithCredential(user, credential);
            alert('Verification successful');
            return; // Exit the function if reauthentication is successful
          } catch (error) {
            alert('Press OK when you have verified!')
      
            // Increment attempt counter
            attempt++;
            
            // Optionally, wait before retrying to avoid rapid requests
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      
        console.error('Reauthentication failed after maximum retries');
      }

    const handleSaveEmail = async () => {

        const prevEmail = user.email

        if (user.email != email) {
            try {
                // Update email in Firebase Authentication
                await verifyBeforeUpdateEmail(user, email);

                alert('A verification email has been sent to your new email address. Please verify to complete the email change.');
                setIsEditingEmail(false);
                
                reauthenticateUntilSuccess(user, email, "12345678")
                // Update email in Firestore
                await updateDoc(doc(db, 'users', user.uid), { email });

            } catch (error) {
                console.error('Error updating email:', error);
                alert('Failed to update email. Please try again.');
            }
        } else {
            alert('No changes made to the email address.');
            setIsEditingEmail(false);
        }
    };

    const handlePasswordSave = async () => {
        if (newPassword !== confirmPassword) {
            setPasswordError('New password and confirm password do not match');
        } else {
            try {
                const credential = EmailAuthProvider.credential(user.email, oldPassword);
                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, newPassword);
                setOpenPasswordDialog(false);
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setPasswordError('');
                alert('Password updated successfully!');
            } catch (error) {
                console.error('Error updating password:', error);
                alert('Failed to update password. Please try again.');
            }
        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const storageRef = ref(storage, `profileImages/${user.uid}`);
            try {
                await uploadBytes(storageRef, file);
                const profileImageUrl = await getDownloadURL(storageRef);
                await updateDoc(doc(db, 'users', user.uid), { profilePic: profileImageUrl });
                setImagePreview(profileImageUrl);
                alert('Profile picture updated successfully!');
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Failed to upload image. Please try again.');
            }
        }
    };

    const handleSavePoints = async () => {
        try {
            await updateDoc(doc(db, 'users', user.uid), { points });
            setIsEditingPoints(false);
            alert('Points updated successfully!');
        } catch (error) {
            console.error('Error updating points:', error);
            alert('Failed to update points. Please try again.');
        }
    };

    const handleSendPasswordResetEmail = async () => {
        if (user.email) {
            try {
                await sendPasswordResetEmail(auth, user.email);
                alert('Password reset email sent! Check your inbox.');
            } catch (error) {
                console.error('Error sending password reset email:', error);
                alert('Failed to send password reset email. Please try again.');
            }
        } else {
            alert('No email address associated with this account.');
        }
    };

    const inputStyles = {
        disableUnderline: true,
        sx: {
            backgroundColor: '#f0f0f0',
            borderRadius: '20px',
            '&:hover': {
                backgroundColor: '#bfbfbf',
            },
            '&.Mui-focused': {
                backgroundColor: '#f0f0f0',
            },
        },
    };

    return (
        <div className="container">
            <Stack spacing={2}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <IconButton onClick={() => document.getElementById('profile-image-input').click()}>
                        <img
                            src={imagePreview}
                            alt="Profile Icon"
                            style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }}
                        />
                    </IconButton>
                    <input
                        id="profile-image-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <TextField
                        label="Name"
                        variant="filled"
                        InputProps={inputStyles}
                        value={name}
                        onClick={() => setIsEditingName(true)}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEditingName}
                        fullWidth
                    />
                    {isEditingName ? (
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
                            <Button onClick={handleSaveName} color="primary" variant="contained">
                                Save
                            </Button>
                            <Button onClick={handleCancelNameEdit} color="secondary" variant="outlined" style={{ marginLeft: 10 }}>
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <IconButton onClick={() => setIsEditingName(true)} style={{ marginLeft: 20 }}>
                            <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                        </IconButton>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="filled"
                        InputProps={inputStyles}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!isEditingEmail}
                        fullWidth
                    />
                    {isEditingEmail ? (
                        <Button onClick={handleSaveEmail} style={{ marginLeft: 20 }}>
                            Save
                        </Button>
                    ) : (
                        <IconButton onClick={() => setIsEditingEmail(true)} style={{ marginLeft: 20 }}>
                            <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                        </IconButton>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="filled"
                        InputProps={inputStyles}
                        value="********"
                        onClick={() => handleSendPasswordResetEmail()}
                        disabled
                    />
                    <IconButton onClick={() => handleSendPasswordResetEmail()} style={{ marginLeft: 20 }}>
                        <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Points"
                        type="number"
                        variant="filled"
                        InputProps={inputStyles}
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        onBlur={handleSavePoints}
                        disabled={!isEditingPoints}
                    />
                    <IconButton onClick={() => setIsEditingPoints(true)} style={{ marginLeft: 20 }}>
                        <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                    </IconButton>
                </div>
            </Stack>

            {/* Password Dialog */}
            <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Old Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <TextField
                        label="New Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {passwordError && (
                        <Typography color="error">{passwordError}</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenPasswordDialog(false)}>Cancel</Button>
                    <Button onClick={handlePasswordSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withAuth(Profile);