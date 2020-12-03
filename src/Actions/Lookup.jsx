import React, { useState, useEffect } from 'react'
import Home from "../Components/Home"

import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

function Lookup() {
    const [lon, setLon] = useState(81.629)
    const [lat, setLat] = useState(21.251)
    const [loader, setLoader] = useState(true)


    const APP_KEY = "1fcc521305ab66a930d3de8367ef13a7"

    // http://api.openweathermap.org/data/2.5/forecast?lat=21.251&lon=81.629&units=metric&appid=1fcc521305ab66a930d3de8367ef13a7

    // var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APP_KEY}`
    var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APP_KEY}`

    const [reports, setReports] = useState({})

    useEffect(() => {
        getLocation()
        getWeather()
    }, [])

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            return (
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <h1>Your Device Does Not Support GPS sorry we can't show you weather</h1>
                </div>
            )
        }
    }

    function showPosition(position) {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
    }
    getLocation()

    // const getWeather = () => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setLoader(true)
    //             setReports(data)
    //             setLoader(false)
    //         })
    // }

    const getWeather = async () => {
        setLoader(true)
        const response = await fetch(url)
        const data = await response.json()
        setReports(data)
        setLoader(false)
    }

    if (loader) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="weather-app">
            <div className="container">
                <div className="row">
                    <OwlCarousel className="owl-theme" loop items={1} margin={10} nav center navElement>
                        {reports.list.map((x, i) => {
                            if (i % 8 === 0) {
                                return (
                                    <Home key={i}
                                        temp={x.main.temp} feelsLike={x.main.feels_like}
                                        temp_max={x.main.temp_max} temp_min={x.main.temp_min}
                                        wind_speed={x.wind.speed} main={x.weather[0].main}
                                        city={reports.city.name} date={x.dt_txt} icon={x.weather[0].icon}
                                    />
                                )
                            }
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Lookup
