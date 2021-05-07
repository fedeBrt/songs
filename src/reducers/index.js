import { combineReducers } from 'redux';
//we use curly braces because it's not an export default
//import {selectSong} from './actions';

//the reducer takes the previous state and an action and returns the next state
export const songsReducer = () => {
//list of songs 
    return [
        { title: 'No Diggity', duration: '4:05'},
        { title: 'I Want it That Way', duration: '3:45'},
        { title: 'Wannabe', duration: '2:30'},
        { title: 'Macarena', duration: '5:00'}
    ];
};

export const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});