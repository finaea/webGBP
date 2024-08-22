import React, { useState } from 'react';
import { Button, Stack, TextField, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

function Profile() {
    const [open, setOpen] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [value, setValue] = useState('');

    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleClickOpen = (field, currentValue) => {
        setCurrentField(field);
        setValue(currentValue);
        setOpen(true);
    };

    const handleClickOpenPasswordDialog = () => {
        setOpenPasswordDialog(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClosePasswordDialog = () => {
        setOpenPasswordDialog(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setPasswordError('');
    };

    const handleSave = () => {
        // Implement save logic here
        setOpen(false);
    };

    const handlePasswordSave = () => {
        if (newPassword !== confirmPassword) {
            setPasswordError('New password and confirm password do not match');
        } else {
            // Implement password change logic here
            setOpenPasswordDialog(false);
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setPasswordError('');
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
        readOnly: true,
    };

    const buttonStyles = {
        borderRadius: '20px',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    };

    return (
        <div className="container">
            <Stack spacing={2}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <ProfileIcon style={{ fontSize: 100, color: '#ffffff' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Name"
                        variant="filled"
                        InputProps={inputStyles}
                        value="John Doe"
                        readOnly
                    />
                    <IconButton onClick={() => handleClickOpen('Name', 'John Doe')} style={{marginLeft: 20}}>
                        <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="filled"
                        InputProps={inputStyles}
                        value="john.doe@example.com"
                        readOnly
                    />
                    <IconButton onClick={() => handleClickOpen('Email', 'john.doe@example.com')} style={{marginLeft: 20}}>
                        <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="filled"
                        InputProps={inputStyles}
                        value="********"
                        readOnly
                    />
                    <IconButton onClick={handleClickOpenPasswordDialog} style={{marginLeft: 20}}>
                        <EditNoteIcon style={{ fontSize: 50, color: '#ffffff' }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        label="Points"
                        type="number"
                        variant="filled"
                        InputProps={inputStyles}
                        value="100"
                        readOnly
                    />
                </div>
            </Stack>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit {currentField}</DialogTitle>
                <DialogContent>
                    <TextField
                        label={currentField}
                        variant="filled"
                        fullWidth
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

            {/* Password Dialog */}
            <Dialog open={openPasswordDialog} onClose={handleClosePasswordDialog}>
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
                    <Button onClick={handleClosePasswordDialog}>Cancel</Button>
                    <Button onClick={handlePasswordSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Profile;
