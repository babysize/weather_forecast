import React from 'react';
import ReactDOM from 'react-dom/client';
import ForcastForDay from './components/ForcastForDay';
  
  class WeatherForecast extends React.Component {
    render(){
      return(
        <ForcastForDay></ForcastForDay>
      )
    }
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WeatherForecast/>)