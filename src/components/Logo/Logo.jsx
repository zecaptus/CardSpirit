import React from 'react';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Typography
      sx={{
        fontFamily: 'kardust-extended',
        fontSize: 24,
        background: (theme) => theme.palette.gradient.secondary,
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        cursor: 'pointer',
        textShadow: '1px 1px',
      }}
    >
      Card Spirit
    </Typography>
  );
};

export default Logo;
