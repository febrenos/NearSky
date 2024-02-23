import {combineReducers} from 'redux'

import { cardWeatherReducer }from './cardWeather/reducer'

const rootReducer = combineReducers({cardWeatherReducer,})

export default rootReducer