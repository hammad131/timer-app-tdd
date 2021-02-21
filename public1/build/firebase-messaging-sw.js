importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
    apiKey: "AIzaSyDOPv5OfP7k8QSIUGeEjaaq-rAlknqosDQ",
    authDomain: "timer-app-fdc2c.firebaseapp.com",
    projectId: "timer-app-fdc2c",
    storageBucket: "timer-app-fdc2c.appspot.com",
    messagingSenderId: "1059876089603",
    appId: "1:1059876089603:web:80a244699b93dedde7c336",
    measurementId: "G-MMVZ08PNRZ"

  })

firebase.messaging();