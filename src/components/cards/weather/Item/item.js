import React, { useState } from "react";
import * as Styles from './style.js'
import { IllustrationCard, LineGraphic } from "../../../index.js";
import { useDispatch, useSelector } from "react-redux";

export function WeatherCard({list, bigSizeProp=false}) {
    const [isShowMore, setIsShowMore] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);
    const [bigSize, setBigSize] = useState(bigSizeProp);
    const [isDisplayNone, setIsDisplayNone] = useState(false);
    const dispatch = useDispatch();
    const places = useSelector((state) => state.cardWeatherReducer.places);

    function HandleClickShowMore() {
        setIsShowMore(!isShowMore);
    }

    function HandleClickDay(dayIndex) {
        setSelectedDay(dayIndex === selectedDay ? 0 : dayIndex);
    }

    function handleRemovePlace(place) {
        const updatedPlaces = places.filter(item => {
            // Verifica se o item é uma string antes de chamar trim()
            if (typeof item === 'string') {
                setIsDisplayNone(true)
                return item.trim() !== place.trim();
            }
            // Se não for uma string, mantenha o item na lista
            return true;
        });

        if (updatedPlaces.length < places.length) {
            console.log(`"${place}" removed`);
        } else {
            console.log(`"${place}" not found`);
        }

        dispatch({ type: 'REMOVE_PLACES_REQUEST', payload: updatedPlaces });
    }
    

    // setSelectedDay(dayIndex === selectedDay ? 0 : dayIndex);

    // type="sunny"
    // type="cloudySun"
    // type="cloudyMoon"
    // type="rainy"
    // type="foggy"
    // type="snow"
    // type="storm"

    return (
        <>
        
                <Styles.Card isShowMore={isShowMore} isDisplayNone={isDisplayNone} weatherType={list.data[selectedDay].actualWeather}>
                    <Styles.FlexTitle>
                        {bigSize &&
                            <Styles.ContentIcon onClick={HandleClickShowMore}>
                                <Styles.ArrowUpIcon isShowMore={isShowMore}/>
                            </Styles.ContentIcon>
                        }
                        <Styles.PlaceName>{list.placeName}</Styles.PlaceName>
                        <Styles.ContentClose onClick={() => handleRemovePlace(list.placeKey)}>
                            <Styles.CloseIcon/>
                        </Styles.ContentClose>
                    </Styles.FlexTitle>
                    
                    {bigSize && <IllustrationCard type={list.data[selectedDay].actualWeather}/>}
                    <Styles.Temperature>
                        <Styles.Before>
                            <Styles.ContentIconBefore>
                                {list.data[selectedDay].actualWeather ==="sunny" && <Styles.SunnyIcon/>}
                                {list.data[selectedDay].actualWeather ==="cloudySun" && <Styles.CloudySunIcon/>}
                                {list.data[selectedDay].actualWeather ==="moony" && <Styles.MoonyIcon/>}
                                {list.data[selectedDay].actualWeather ==="cloudyMoon" && <Styles.CloudyMoonIcon/>}
                                {list.data[selectedDay].actualWeather ==="rainy" && <Styles.RainyIcon/>}
                                {list.data[selectedDay].actualWeather ==="foggy" && <Styles.FoggyIcon/>}
                                {list.data[selectedDay].actualWeather ==="snow" && <Styles.SnowyIcon/>}
                                {list.data[selectedDay].actualWeather ==="rainyMix" && <Styles.RainyMixIcon/>}
                                {list.data[selectedDay].actualWeather ==="storm" && <Styles.StormIcon/>}
                            </Styles.ContentIconBefore>
                            <Styles.BeforeText>{`${list.data[selectedDay].maxTemperature}°/${list.data[selectedDay].minTemperature}°`}</Styles.BeforeText>
                        </Styles.Before>
                        <Styles.Temp>{`${list.data[selectedDay].actualTemperature}°`}</Styles.Temp>
                        <Styles.After>
                                <Styles.ContentIconAfter>
                                    <Styles.RainyIcon/>
                                    <Styles.Text>{`${list.data[selectedDay].rainChance}%`}</Styles.Text>
                                </Styles.ContentIconAfter>
                            <Styles.AfterText>{list.data[selectedDay].forecastWeather}</Styles.AfterText>
                        </Styles.After>
                    </Styles.Temperature>
                    {bigSize &&
                        <Styles.Description>
                        <Styles.Center>
                            <div>
                                {list.data.map((dayItem, index) => (
                                    (index < 3 || isShowMore) && (
                                        <Styles.Day 
                                            key={index}
                                            isSelected={index === selectedDay}
                                            onClick={() => HandleClickDay(index)}
                                        >
                                            <Styles.FlexIcon>
                                                <Styles.ContentIcon>
                                                    {dayItem.forecastWeather === "sunny" && <Styles.SunnyIcon />}
                                                    {dayItem.forecastWeather === "cloudySun" && <Styles.CloudySunIcon />}
                                                    {dayItem.forecastWeather === "rainy" && <Styles.RainyIcon />}
                                                    {dayItem.forecastWeather === "foggy" && <Styles.FoggyIcon />}
                                                    {dayItem.forecastWeather === "snow" && <Styles.SnowyIcon />}
                                                    {dayItem.forecastWeather === "rainyMix" && <Styles.RainyMixIcon />}
                                                    {dayItem.forecastWeather === "storm" && <Styles.StormIcon />}
                                                </Styles.ContentIcon>
                                                <Styles.Text>{dayItem.day}</Styles.Text>
                                            </Styles.FlexIcon>
                                            <Styles.Text>{`${dayItem.maxTemperature}°/${dayItem.minTemperature}°`}</Styles.Text>
                                        </Styles.Day>
                                    )
                                ))}
                            </div>
                        </Styles.Center>
                        {isShowMore && (
                            <>
                                <LineGraphic
                                    key={`temperature_${selectedDay}`}
                                    title={"Temperature"}
                                    data={list.data[selectedDay].temperatureData}
                                    series={"Celsius"}
                                    yFormat={'°'}
                                />
                                <LineGraphic
                                    key={`precipitation_${selectedDay}`}
                                    title={"Chance of precipitation"}
                                    data={list.data[selectedDay].precipitationData}
                                    yFormat={'%'}
                                    series={"Percentual"}
                                />
                            </>
                        )}
                        </Styles.Description>
                    }
                </Styles.Card>
        </>
    );
}
