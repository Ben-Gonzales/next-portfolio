'use client';
import React from "react";
import styles from './page.module.css';
import Link from "next/link";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from 'react';
import {Homemenu, Title, Menubar, Itemnav} from './styles';



const centerCoords = { lat: 14.299, lng: 120.959 };

const Weather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    const handleMapClick = (event) => {
        const clickedLat = event.latLng.lat();
        const clickedLng = event.latLng.lng();

        setLatitude(clickedLat);
        setLongitude(clickedLng);

        fetchWeatherData(clickedLat, clickedLng);
    };

    const fetchWeatherData = async (lat, lng) => {
        console.log(process.env.NEXT_PUBLIC_WEATHER_KEY);
        try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key='+process.env.NEXT_PUBLIC_WEATHER_KEY+'&q='+lat+','+lng);
        const data = await response.json();
        setWeatherData(data);
        } catch (error) {
        console.error("Error fetching weather data: ", error);
        setWeatherData(null);
        }
    };
    return (
        <main className={styles.main}>
            <Homemenu>
            <Title>
                BG Tech
            </Title>
            <Menubar>
                <Itemnav className={styles.menu}>
                    <Link href='../'><li className={styles.menuitems}>Home</li></Link>
                    <Link href='../about_me'><li className={styles.menuitems}>About Me</li></Link>
                    <Link href='./'><li className={styles.menuitems}>Projects</li></Link>
                </Itemnav>
            </Menubar>
            </Homemenu>

            <div className={styles.main}>
                <section className={styles.capsule}>
                    <div>
                        <h2 className={styles.title}>Daily Weather Forecast</h2>
                    </div>
                </section>

                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_KEY}>
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "450px" }}
                        center={centerCoords}
                        zoom={12}
                        onClick={handleMapClick}>
                        {latitude && longitude && <Marker position={{ lat: latitude, lng: longitude }} />}
                    </GoogleMap>
                </LoadScript>

                <section className="container2">
                    <h2 className="ms-4">Coordinates</h2>
                    <div className="coordinates">
                        <div className="col-md-6">
                            <div className="card">
                                <div>
                                    <h5 className="card-title">Latitude</h5>
                                    <p className="card-text"><span id="latitude">{latitude || '--'}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div>
                                    <h5 className="card-title">Longitude</h5>
                                    <p className="card-text"><span id="longitude">{longitude || '--'}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="container3">
                    <div className="h2">Weather Forecast of the Day</div>
                    <div id="weatherforecast" className="container3">
                        <table className="table table-hover">
                            <thead>
                                <tr className="text-primary">
                                    <th scope="col">Date</th>
                                    <th scope="col">Condition</th>
                                    <th scope="col">Minimum Temperature (°C)</th>
                                    <th scope="col">Maximum Temperature (°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weatherData && weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0] && (
                                <tr>
                                    <td className={styles.details} id="Date">{weatherData.forecast.forecastday[0].date}</td>
                                    <td className={styles.details} id="Condition"><img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} /><br />{weatherData.current.condition.text}</td>
                                    <td className={styles.details} id="Minimum Temperature">{weatherData.forecast.forecastday[0].day.mintemp_c}</td>
                                    <td className={styles.details} id="Maximum Temperature">{weatherData.forecast.forecastday[0].day.maxtemp_c}</td> 
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        
            

            
        </main>
    );
};

export default Weather;