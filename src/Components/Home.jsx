import React from 'react'

function Home({ temp, feelsLike, temp_max, temp_min, wind_speed, main, city, date, icon }) {
    var newDate = new Date(date)
    newDate = newDate.toISOString().split('T')[0]
    return (
        <div className="weather-container-main">
            <div className="weather-main-container">
                <div className="weather-sub-container">
                    <div className="weather-heading">
                        <h1>{temp}°</h1>
                    </div>
                    <div className="weather--city-container">
                        <h1 className="m-0">{city}</h1>
                        <p>{newDate}</p>
                    </div>
                </div>
                <div className="weather-sub-container">
                    <div className="weather--main">
                        <img src={"https://openweathermap.org/img/wn/" + icon + "@2x.png"} alt={main} />
                    </div>
                    <div className="extra-detail--container">
                        <ul className="m-0 p-0">
                            <li>Max Temp: {temp_max}°</li>
                            <li>Min Temp: {temp_min}°</li>
                            <li>Feels Like: {feelsLike}°</li>
                            <li>Wind Speed: {wind_speed}km/h</li>
                            <li>Weather: {main}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home