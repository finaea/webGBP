import React from 'react';
import { Button, Stack } from '@mui/material';
import '../styles/common.css';
import StartIcon from '@mui/icons-material/PlayArrow';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import QuizIcon from '@mui/icons-material/Quiz';
import RewardsIcon from '@mui/icons-material/CardGiftcard';  // Importing a suitable icon for rewards
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import withAuth from '../utils/withAuth'; // Import the HOC

function Menu() {
    const buttonStyles = {
        transform: 'scale(1.5)',
        borderRadius: '20px',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.6)',
        },
    };

    const navigate = useNavigate();
    const auth = getAuth();

    const handleClick = (link) => {
        navigate(link);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login after logging out
        } catch (error) {
            console.error('Error logging out:', error);
            alert('Failed to log out. Please try again.');
        }
    };

    return (
        <div className="container">
            <Stack spacing={5}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <QuizIcon style={{ fontSize: 100, color: '#ffffff' }} />
                </div>
                <Button
                    variant="contained"
                    startIcon={<StartIcon style={{ color: '#4CAF50' }} />}
                    color="primary"
                    sx={buttonStyles}
                    onClick={() => handleClick('/choice')}
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ProfileIcon style={{ color: '#2196F3' }} />}
                    color="primary"
                    sx={buttonStyles}
                    onClick={() => handleClick('/profile')}
                >
                    Profile
                </Button>
                <Button
                    variant="contained"
                    startIcon={<LeaderboardIcon style={{ color: '#FFC107' }} />}
                    color="primary"
                    sx={buttonStyles}
                    onClick={() => handleClick('/leaderboard')}
                >
                    Leaderboard
                </Button>
                <Button
                    variant="contained"
                    startIcon={<RewardsIcon style={{color: '#FF5722'}}/>}  // Rewards button
                    color="primary"
                    sx={buttonStyles}
                    onClick={() => handleClick('/rewards')}
                >
                    Rewards
                </Button>
                <Button
                    variant="contained"
                    startIcon={<LogoutIcon style={{ color: '#F44336' }} />}
                    color="primary"
                    sx={buttonStyles}
                    onClick={handleLogout} // Handle logout action
                >
                    Logout
                </Button>
            </Stack>
        </div>
    );
}

export default withAuth(Menu); // Wrap Menu with authentication check