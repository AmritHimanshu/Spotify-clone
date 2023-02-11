export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // token: "BQD_dbLx8z30FEueF3b43rUzsUlLCNVzFixQ12g3uuqGMkvhqduNcmLzHhuzhFMk-XHP70B32jACGLF4Kc5RAPGPmCcfZcS1VMYxXhaGLwVjzNeUR4EFbfgbWrMTADFeAwNHUJHJaKvqD5TQ0aTZF9AM7qGrun6yff53xlfsNovfe62vzI0BXOQfJPMzsbYZ_4-6G9sf1rru_7Ad2mA9",
}

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }

}

export default reducer;
