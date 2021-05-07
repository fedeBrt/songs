//action creator
// we add export here, so we can export more than a function from a file
//payload means "transmitted data"
export const selectSong = () => {
    //we return an action
    return {
        type: 'SONG_SELECTED',
        payload: 'song'
    };
};
