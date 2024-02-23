import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './style';

//return API
const Searched = [
  {
    placeKey:"sp-br",
    placeName:"São Paulo"
  }, 
  {
    placeKey:"rj-br",
    placeName:"Rio De Janeiro"
  }, 
  {
    placeKey:"arg-afr",
    placeName:"Argelia"
  }
]

export function SearchInput({placeholder='Add place'}) {
  const dispatch = useDispatch();
  const { bigSize } = useSelector((state) => state.cardWeatherReducer);
  const [inputValue, setInputValue] = useState('');
  const places = useSelector((state) => state.cardWeatherReducer.places);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBigSizeClick = () => {
    dispatch({ type: 'TOGGLE_BIG_SIZE' });
  };

  const handleAddToPlacesRequest = (place) => {
    if (!places.includes(place)) {
      dispatch({ type: 'ADD_PLACES_REQUEST', payload: place });
      setInputValue('')
      console.log(`"${place}" added`);
    } else {
      console.log(`"${place}" already exist`);
    }
  };

  return (
    <>
    <div>
      <Styled.All>
        <Styled.Content>
          <Styled.Input placeholder={placeholder} value={inputValue} onChange={handleInputChange } />
          <Styled.BgIcon>
              <Styled.SearchIcon/>
              <Styled.BigSizeIcon isActive={bigSize} onClick={handleBigSizeClick}/>
          </Styled.BgIcon>
        </Styled.Content>
        {(Searched.length !== 0 && inputValue) &&
          <Styled.ContentSearch>
            {Searched.map((item, index) => (
              <Styled.ItemSearch 
                key={index}
                onClick={() => handleAddToPlacesRequest(item.placeKey)}
              >
                {item.placeName}
              </Styled.ItemSearch>
            ))}
          </Styled.ContentSearch>
        }
      </Styled.All>
    </div>
    </>
  );
}