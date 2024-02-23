import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './style';
import { WeatherCard } from '../../../index';
//https://api.hgbrasil.com/stats/weather_cities?key=78g14f59&format=json-cors&sdk_version=hgbrasil
//https://api.hgbrasil.com/weather/?format=json-cors&key=78g14f59&woeid=455827&sdk_version=js1.0.0
var placeInfo = [
    {
        placeKey:"sp-br",
        placeName:"São Paulo",
        data:[
        {
            day: 'Today',
            forecastWeather: 'sunny',
            actualWeather: 'foggy',
            actualTemperature:15,
            rainChance:55,
            temperatureData: [20, 22, 24, 26, 28, 30, 28, 20, 18, 17, 15, 15],
            precipitationData: [0, 10, 20, 30, 40],
            maxTemperature: 16,
            minTemperature: 11,
        },
        {
            day: 'Friday',
            forecastWeather: 'cloudySun',
            actualTemperature:11,
            rainChance:42,
            temperatureData: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
            precipitationData: [0, 10, 20, 30, 40],
            maxTemperature: 16,
            minTemperature: 11,
        },
        {
            day: 'Saturday',
            forecastWeather: 'rainy',
            actualTemperature:16,
            rainChance:25,
            temperatureData: [12, 14, 16, 10, 10, 12, 8, 5, 0, -9, -10, -11],
            precipitationData: [10, 20, 30, 40, 50],
            maxTemperature: 18,
            minTemperature: 9,
        },
        {
            day: 'Sunday',
            forecastWeather: 'foggy',
            actualTemperature:10,
            rainChance:10,
            temperatureData: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
            precipitationData: [5, 15, 25, 35, 45],
            maxTemperature: 16,
            minTemperature: 7,
        },
        {
            day: 'Tuesday',
            forecastWeather: 'snow',
            actualTemperature:31,
            rainChance:85,
            temperatureData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
            precipitationData: [15, 25, 35, 45, 55],
            maxTemperature: 32,
            minTemperature: 11,
        },
        {
            day: 'Wednesday',
            forecastWeather: 'rainyMix',
            actualTemperature:19,
            rainChance:25,
            temperatureData: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44],
            precipitationData: [8, 18, 28, 38, 48],
            maxTemperature: 20,
            minTemperature: 8,
        },
        {
            day: 'Thursday',
            forecastWeather: 'storm',
            actualTemperature:22,
            rainChance:25,
            temperatureData: [25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47],
            precipitationData: [20, 30, 40, 50, 60],
            maxTemperature: 16,
            minTemperature: 11,
        },
        ],
    },
    {
        placeKey:"rj-br",
        placeName:"Rio De Janeiro",
        data:[
            {
                day: 'Today',
                forecastWeather: 'sunny',
                actualWeather: 'rainyMix',
                actualTemperature:10,
                rainChance:55,
                temperatureData: [20, 22, 24, 26, 28, 30, 28, 20, 18, 17, 15, 15],
                precipitationData: [0, 10, 20, 30, 40],
                maxTemperature: 26,
                minTemperature: 20,
            },
            {
                day: 'Friday',
                forecastWeather: 'cloudySun',
                actualTemperature:11,
                rainChance:42,
                temperatureData: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
                precipitationData: [0, 10, 20, 30, 40],
                maxTemperature: 16,
                minTemperature: 11,
            },
            {
                day: 'Saturday',
                forecastWeather: 'rainy',
                actualTemperature:16,
                rainChance:25,
                temperatureData: [12, 14, 16, 10, 10, 12, 8, 5, 0, -9, -10, -11],
                precipitationData: [10, 20, 30, 40, 50],
                maxTemperature: 18,
                minTemperature: 9,
            },
            {
                day: 'Sunday',
                forecastWeather: 'foggy',
                actualTemperature:10,
                rainChance:10,
                temperatureData: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
                precipitationData: [5, 15, 25, 35, 45],
                maxTemperature: 16,
                minTemperature: 7,
            },
            {
                day: 'Tuesday',
                forecastWeather: 'snow',
                actualTemperature:31,
                rainChance:85,
                temperatureData: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
                precipitationData: [15, 25, 35, 45, 55],
                maxTemperature: 32,
                minTemperature: 11,
            },
            {
                day: 'Wednesday',
                forecastWeather: 'rainyMix',
                actualTemperature:19,
                rainChance:25,
                temperatureData: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44],
                precipitationData: [8, 18, 28, 38, 48],
                maxTemperature: 20,
                minTemperature: 8,
            },
            {
                day: 'Thursday',
                forecastWeather: 'storm',
                actualTemperature:22,
                rainChance:25,
                temperatureData: [25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47],
                precipitationData: [20, 30, 40, 50, 60],
                maxTemperature: 16,
                minTemperature: 11,
            },
        ],
    }
]

export function WeatherCardList({ list=placeInfo }) {
    const { bigSize } = useSelector((state) => state.cardWeatherReducer);
    const [renderKey, setRenderKey] = useState(0);

    useEffect(() => {
        setRenderKey((prevKey) => prevKey + 1);
    }, [bigSize]);

    return (
      <Styled.Cards key={renderKey} bigSize={bigSize}>
        {list.map((item, index) => (
          <WeatherCard key={index} list={item} bigSizeProp={bigSize}/>
        ))}
      </Styled.Cards>
    );
}
