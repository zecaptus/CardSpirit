import React from 'react';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = ({ imgSrc }) => {
  return (
    <MuiCard
      variant="outlined"
      sx={{
        maxWidth: 345,
        backgroundColor: 'gasMoneyBlack.main',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        position: 'relative',
        overflow: 'unset',
        border: 0,
        pt: '0.1px',

        '&:before': {
          content: '""',
          background: (theme) => theme.palette.gradient.primary90,
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          width: 'calc(100% + 2px)',
          height: 'calc(100% + 2px)',
          zIndex: -1,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 0,
        },
      }}
    >
      <CardMedia
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 0,
          height: 313,
          margin: 2,
          mb: 0,
        }}
        image={imgSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'kardust',
            color: 'alphaBlue.main',
            '& span': {
              color: 'common.white',
            },
          }}
        >
          <span>69.90</span> EUR
        </Typography>
        <Typography variant="body2" color="airdropWhite.main">
          COFFRET DRESSEUR D'ÉLITE <br /> ECARLATE ET VIOLET ÉVOLUTIONS À PALDEA
          <br />
          FR
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Plus d'infos</Button>
        <Button size="small" variant="contained">
          Ajouter au panier
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
