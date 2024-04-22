import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyDKf4CQ68mk1BT3mTPI1vUJpMXhQu_uklI",
  authDomain: "push-notifications-test-ddde1.firebaseapp.com",
  projectId: "push-notifications-test-ddde1",
  storageBucket: "push-notifications-test-ddde1.appspot.com",
  messagingSenderId: "409374673910",
  appId: "1:409374673910:web:e3c8a75069bd334ba955d7"
};

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

initializeApp(firebaseConfig);

const messaging = getMessaging();

const getFirebaseToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: 'BOoIrhz1ybLoFKswQgAfT8gGZ3r4IKjtMytNC8PttUCKFBh86Q6LO8kkf7KYlPseLfGnfDZllKJWtZaWUQ1i5zQ' });
    console.log(`currentToken: ${currentToken}`)
    if (!currentToken) {
      console.log("No registration token available. Request permission to generate one.");
      
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }
};


export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await getFirebaseToken();
    }
  } catch (error) {
    console.log("An error occurred while getting user permission. ", error);
  }
};
