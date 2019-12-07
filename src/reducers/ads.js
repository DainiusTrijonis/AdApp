
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
        case 'DELETE_AD':
            console.log('DELETED AD succesfully', action.id);
            return state;
        case 'DELETE_AD_ERROR':
            console.log('DELETED AD error', action.err);
            return state;
        case 'DELETE_AD_NOT_LOGGED':
            console.log('USER NOT LOGGED IN FOR DELETING AD');
            return state;
        case 'CHANGE_AD':
            console.log(action.data);
            for( let i = 0; i<state.length; i++)
            {
                if(state[i].id===action.ad.id)
                {
                    state[i].data.text = action.text;
                    state[i].data.price = action.price;
                    console.log('Changed data of ad', state[i].data);
                }
            }
            return [
                ...state
            ];
        case 'CHANGE_AD_ERROR':
            console.log('CHANGE AD error', action.err);
            return state;
        case 'CHANGE_AD_NOT_LOGGED':
            console.log('USER NOT LOGGED IN FOR CHANGING AD');
            return state;
        default:
            return state
    }
}
export default ads