import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
        Servicios 
        </Typography>
        <Typography variant="h4" component="h4">          
          Sonorización Profesional
        </Typography>
        <Typography variant="h5" className={classes.pos} >
            Cancun - Riviera Maya - Playa del Carmen - Cozumel - Isla Mujeres
        </Typography>
        <Typography variant="h5" component="h3">
          <ul>
            <li>Fiestas</li>
          
            <li>Bodas</li>
          
            <li>Conferencias</li>
          
            <li>Conciertos</li>
          
            <li>Karaoke</li>
          
           <li>Refuerzo Sonoro a Dj's </li>
          
            <li>Bandas</li>
          
             <li>Músicos en general </li>   

             <li>+52 (998) 2184616</li>   
          </ul>   
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex',alignContent:'center',justifyContent:'space-around'}}>
          <Button   color='primary' >
          <h5>info@interaudio.mx</h5>
          </Button>    
      </CardActions>
      
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);