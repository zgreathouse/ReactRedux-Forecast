import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions';


//components
import DataChart from './DataChart';
import GoogleMap from './GoogleMap';

class ForecastList extends Component  {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(forecast => forecast.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(forecast => forecast.main.pressure);
    const humidities = cityData.list.map(forecast => forecast.main.humidity);
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><DataChart data={temps} color='blue' units="C" degreeSymbol='˚'/></td>
        <td><DataChart data={pressures} color='black' units="hPa" degreeSymbol=''/></td>
        <td><DataChart data={humidities} color='yellow' units="%" degreeSymbol=''/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forecast.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ forecast }) => ({
  forecast
});

export default connect(mapStateToProps)(ForecastList);
