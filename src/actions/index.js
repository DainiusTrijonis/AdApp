import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



export const addAd = (text,price) => {
    return (dispatch, getState) => {
        onCreateAds(text,price);
    }
}
export const displayAds = () => {
    return (dispatch, getState) => {
        fetchAds();
    }
}


async function onCreateAds(text,price) {

    const ref = firestore().collection('ads');

    const uid = auth().currentUser.uid;
    if(uid != null)
    {
        await ref.add({
            author: uid,
            text:text,
            price:price,
            createdAt: new Date()
        });
    }
}

async function fetchAds() {

    const ref = firestore().collection('ads');

    await ref.get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
    })

}