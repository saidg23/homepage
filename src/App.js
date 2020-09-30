import React from 'react';
import './App.css';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: '00:00:00 AM'
        }

        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(this.updateTime, 1000);
    }

    updateTime(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        let seconds = date.getSeconds();
        if(seconds < 10){
            seconds = '0' + seconds;
        }
        let period = ' AM';

        if(hours >= 12){
            period = ' PM'

            if(hours > 12){
                hours -= 12;
            }
        }
        if(hours < 10){
            hours = '0' + hours;
        }

        this.setState({time: hours + ':' + minutes + ':' + seconds + period});
    }

    render(){
        return(
            <div id='clock'>
                {this.state.time}
            </div>
        );
    }
}

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            request: new XMLHttpRequest(),
            temperature: 'N/A',
            wind: 'N/A',
            forecast: 'N/A',
            imageUrl: ''
        }

        this.getWeatherData = this.getWeatherData.bind(this);
    }

    componentDidMount(){
        this.state.request.open('GET', 'https://api.weather.gov/gridpoints/LIX/61,92/forecast');
        this.state.request.send();
        this.interval = setInterval(this.getWeatherData, 1000);
    }

    getWeatherData(){
        if(this.state.request.status === 0){
            return
        }

        let weatherData = JSON.parse(this.state.request.responseText);
        this.setState({temperature: weatherData.properties.periods[0].temperature});
        this.setState({wind: 'Wind: ' + weatherData.properties.periods[0].windSpeed + ' ' + weatherData.properties.periods[0].windDirection});
        this.setState({forecast: weatherData.properties.periods[0].shortForecast});
        this.setState({imageUrl: weatherData.properties.periods[0].icon});
        clearInterval(this.interval);
    }

    render(){
        return(
            <div id="weather">
                <div id='temp-and-icon-div'>
                    <img src={this.state.imageUrl} />
                    <p>{this.state.temperature}&deg;F</p>
                </div>
                <p>Kenner, LA</p>
                <p>{this.state.forecast} </p>
                <p>{this.state.wind}</p>
            </div>
        )
    }
}

function App() {
    return (
    <div className="App">
        <div id='grid'>
            <Clock />
            <Weather />
        </div>
    </div>
    );
}

export default App;
