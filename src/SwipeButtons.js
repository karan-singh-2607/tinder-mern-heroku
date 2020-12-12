import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

const SwipeButtons = () => {
    return (
        <div className="swipe__action__buttons">
            <IconButton className="Swipe__Repeat"><ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="Swipe__Dislike"><CloseIcon fontSize="large" /></IconButton>
            <IconButton className="Swipe__Star"><StarRateIcon fontSize="large" /></IconButton>
            <IconButton className="Swipe__Love"><FavoriteIcon fontSize="large" /></IconButton>
            <IconButton className="Swipe__Superlike"><FlashOnIcon fontSize="large" /></IconButton>
        </div>
    )
}

export default SwipeButtons
