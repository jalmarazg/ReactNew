import React from 'react'
import ClimaTemperatura from './ClimaTemperatura'
import ClimaInfoExtra from './ClimaInfoExtra'
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY
 } from './../../../constants/climas'
 import './styles.css'

const datosClima = () => {
    return (
        <div className = 'datosClimaCont'> 
            <ClimaTemperatura temperatura = {10} estadoClima = {CLOUD}> </ClimaTemperatura>
            <ClimaInfoExtra humedad = {80} viento = {'10 m/s'}> </ClimaInfoExtra>
        </div>
    )
}

export default datosClima;