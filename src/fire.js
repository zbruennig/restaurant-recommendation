import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDC_pfB25t82inc-DNCb4Crpnbhr-YZ52s',
  authDomain: 'restaurants-78eeb.firebaseapp.com',
  databaseURL: 'https://restaurants-78eeb.firebaseio.com',
  projectId: 'restaurants-78eeb',
  storageBucket: 'restaurants-78eeb.appspot.com',
  messagingSenderId: '129909027933'
}
var fire = firebase.initializeApp(config)

export default fire
