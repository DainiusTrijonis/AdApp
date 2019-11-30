import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';





export const addAd = (text,price) => {
    return (dispatch, getState) => {
        const ref = firestore().collection('ads');

        const unsubscribe = auth().onAuthStateChanged((user) => {
            if(user)
            {
                ref.add({
                    text:text,
                    price:price,
                }).then( () => {
                   dispatch({ type: 'ADD_AD',}); 
                }).catch((err) =>{ 
                    dispatch({ type: 'ADD_AD_ERROR', err});
                });   
            }
            else
            {
                dispatch({type: 'ADD_AD_USER_NOT_LOGGED'});
            }
        })
        unsubscribe();

    }
}
export const displayAds = () => {
    return (dispatch, getState) => {
        const ref = firestore().collection('ads');

        ref.get()
        .then(querySnapshot => {

            let data=[];
            
            let ids = querySnapshot.docs.map(doc => doc.id); //example  ["jQDMSccmxjka2E2BDJmU", "sdVgSscpmYmLEce5RKgL"]
            let datas= querySnapshot.docs.map(doc => doc.data()); // example [{"price": "15555", "text": "bmw"}, {"price": "9999", "text": "audi"}]

            for(let i=0;i<ids.length;i++)
            {
                data.push({id: ids[i], data: datas[i]});
            }
            dispatch({ type: 'DISPLAY_ADS', data});
        }).catch((err) =>{
            dispatch({ type: 'DISPLAY_ADS_ERROR',err});
        });
        
    }
}