import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDOPv5OfP7k8QSIUGeEjaaq-rAlknqosDQ",
    authDomain: "timer-app-fdc2c.firebaseapp.com",
    projectId: "timer-app-fdc2c",
    storageBucket: "timer-app-fdc2c.appspot.com",
    messagingSenderId: "1059876089603",
    appId: "1:1059876089603:web:80a244699b93dedde7c336",
    measurementId: "G-MMVZ08PNRZ"

  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}