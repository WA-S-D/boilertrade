import firebase from '../config/firebase-config';

const socialMediaAuth = (provider) => {
  try {
    return firebase.auth().signInWithPopup(provider).then((data) => {
      return data.user;
    })
  } catch (error) {
    console.log(error)
  }

};

export default socialMediaAuth;