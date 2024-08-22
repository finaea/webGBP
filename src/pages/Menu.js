import {Button, Stack} from '@mui/material';
import '../styles/common.css';
import StartIcon from '@mui/icons-material/PlayArrow';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import QuizIcon from '@mui/icons-material/Quiz';
import { useNavigate } from 'react-router-dom';

function Menu() {

    const buttonStyles = {
        borderRadius: '20px',             // Border radius
            transition: 'transform 0.3s',     // Smooth transition for the enlargement effect
            '&:hover': {
            transform: 'scale(1.1)',        // Enlarge the button when hovered
        },
    }

    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    };

    return (
        <div className="container">
            <Stack spacing={2}>
                <div style={{ width: '100%', textAlign: 'center'}} >
                    <QuizIcon style={{ fontSize: 100, color: '#ffffff'}}  />
                </div>
                <Button
                    variant="contained"
                    startIcon={<StartIcon style={{color: '#4CAF50'}} />}
                    color="primary"
                    sx={buttonStyles}
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ProfileIcon style={{color: '#2196F3'}}/>}
                    color="primary"
                    sx={buttonStyles}
                    onClick={() => handleClick('/profile')}
                >
                    Profile
                </Button>
                <Button
                    variant="contained"
                    startIcon={<LeaderboardIcon style={{color: '#FFC107'}}/>}
                    color="primary"
                    sx={buttonStyles}
                >
                    Leaderboard
                </Button>
                <Button
                    variant="contained"
                    startIcon={<LogoutIcon style={{color: '#F44336'}}/>}
                    color="primary"
                    sx={buttonStyles}
                >
                    Logout
                </Button>
            </Stack>
        </div>
    )
};

export default Menu;