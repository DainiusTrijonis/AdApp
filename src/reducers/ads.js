
 const ads = (state=[],action) => {
    switch(action.type) 
    {
        case 'ADD_AD':
            console.log('created ad ');
            return state;
        case 'ADD_AD_ERROR':
            console.log('creating add got error = ', action.err)
            return state;
        case 'ADD_AD_USER_NOT_LOGGED':
            console.log('User not logged for adding ADS')
            return state;
        case 'DISPLAY_ADS':
            console.log('Displayed ads succesfully', action.data);
            return action.data;
        case 'DISPLAY_ADS_ERROR':
            console.log('DISPLAYING ADS got error = ', action.err)
            return state;
        default:
            return state
    }
}
export default ads