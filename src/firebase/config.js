import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyBFok_-c9Mm5Zc70a7lrQTiNW9hz83FOgY",
  
    authDomain: "bomrp2.firebaseapp.com",
  
    projectId: "bomrp2",
  
    storageBucket: "bomrp2.appspot.com",
  
    messagingSenderId: "639793458292",
  
    appId: "1:639793458292:web:27a681505b7adf37717521"
  
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp

  const timestamp = firebase.firestore.Timestamp


  export {projectFirestore, projectAuth, projectStorage, timestamp}