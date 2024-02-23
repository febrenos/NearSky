import { getLocalStorage, setLocalStorage } from "../../utils/utils";

const cardWeatherState = {
    bigSize: getLocalStorage('bigSize'),
    places: getLocalStorage('places') || [],
};


export const cardWeatherReducer = (state=cardWeatherState, action) => {
    if (action.type === 'TOGGLE_BIG_SIZE') {
        let currentBigSize = state.bigSize;
        if (currentBigSize === null) {
            currentBigSize = true;
        }
        const newBigSize = !currentBigSize;
        setLocalStorage('bigSize', newBigSize);
        return { ...state, bigSize: newBigSize };
    }
    if(action.type === 'ADD_PLACES_REQUEST') {
        const added = [...state.places, action.payload];
        setLocalStorage('places', added)
        return { ...state, places: [...state.places, action.payload] };
    }
    if(action.type === 'REMOVE_PLACES_REQUEST') {
        const removed = [...action.payload];
        setLocalStorage('places', removed)
        console.log(getLocalStorage('places'))
        return { ...state, places: [...action.payload] };
    }
    return state;
};
