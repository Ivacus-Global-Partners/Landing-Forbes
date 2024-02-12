import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Theme } from '@mui/material';
import './style.css'
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: '#F7F7F7',
    padding: '40px 3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
    }
  },
  mainLogo: {
    maxWidth: '200px',
    height: 'auto',
  },
  imageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  secondaryText: {
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 0,
    fontSize: '18px',
  },
  iconsItem: {
    fontStyle: 'normal',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      padding: '7px 0',
      textAlign: 'center',
    },
    '& h3': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '10px',
    },
    '& label': {
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.7vw',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '4vw',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.7vw',
      },
    },
    '& h3, & a': {
      margin: 0,
      color: '#000000',
      fontSize: '1.5vw',
      fontWeight: 'normal',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#c5c5d6',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2vw',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.9vw',
      },
    },
  },
  logosArea: {
    display: 'flex',
    alignItems: 'self-end',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  logos: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    justifyContent: 'end',
    '& img': {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row !important',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'column !important',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      alignItems: 'center !important',
      marginBottom: '30px',
      marginTop: '30px',
    }
  },
  menuContainer: {
    maxWidth: '400px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '250px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
      marginRight: '20px',
      marginBottom: '30px',
      '& img': {
        maxWidth: '120%',
        marginLeft: '-5%',
      }
    },
  },
  downLoadBtn: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '3px',
    border: 'none',
    textAlign: 'center',
    height: '40px',
    width: '268px',
    borderRadius: '20px',
    background: '#980628',
    padding: '8px 62px',
    fontSize: 'medium',
    color: 'white',
    margin: '25px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.getElementById('download-pdf');
    if (link) {
      link.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  };

  return (
    <footer className={classes.footer}>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={4}>
          <Box className={classes.imageContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fsagardoy-logo-landings.png?alt=media&token=4e91e995-da8d-4ce2-9706-e9337820009a" className={classes.mainLogo} alt="Sagardoy Business School" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button className={classes.downLoadBtn} onClick={handleDownload}>
            <DownloadIcon sx={{ fontSize: '1.2em' }} />
            Descargar folleto
          </button>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.logos}>
          <address className={classes.iconsItem}>
            <h3 style={{ fontSize: '18px'}}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FGrupo%2010.svg?alt=media&token=b4b96451-548f-41a9-9517-e18d9cd9e119"
                alt="Location"
                width="20px"
              />
              C/Velázquez 86D. 28006 Madrid
            </h3>
            <label>info@sagardoyschool.com</label>
          </address>
        </Grid>
      </Grid>
    </footer >
  );
};

export default Footer;
