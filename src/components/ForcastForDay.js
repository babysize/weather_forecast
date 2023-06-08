import useStyles from '../styles/ForecastForDay';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import ContainerForTemperature from './ContainerForTemperature';

function ForcastForDay(props) {
  const { classes } = useStyles()
  return(
    <Paper className={classes['paper-container']}>
      <Grid container>
        <ContainerForTemperature></ContainerForTemperature>
        <ContainerForTemperature></ContainerForTemperature>
        <ContainerForTemperature></ContainerForTemperature>
        <ContainerForTemperature></ContainerForTemperature>
      </Grid>
    </Paper>)  
}

export default ForcastForDay;