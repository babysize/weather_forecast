import useStyles from "../styles/ContainerForTemperature"
import { Box, Grid, Typography } from "@mui/material"
import WeatherImage from '../images/sun.png'
import React from "react"

const ContainerForTemperature = (props) => {
  const {classes} = useStyles()
  return(
    <Grid container item xs={3} className={classes.container}>
      <Typography>
        time
      </Typography>
      <Box
        component='img'
        src={WeatherImage}
        className={classes.img}>
      </Box>
      <Typography>
        temperature
      </Typography>
    </Grid>
  )
}

export default ContainerForTemperature