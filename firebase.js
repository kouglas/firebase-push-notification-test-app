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

export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);
// const setupNotifications = async () => {
  
//   try {
//     // Request permission for notifications
//     const permission = await Notification.requestPermission();
    
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       // Get the FCM token
//       const token = await getToken(messaging, {vapidKey: 'BOoIrhz1ybLoFKswQgAfT8gGZ3r4IKjtMytNC8PttUCKFBh86Q6LO8kkf7KYlPseLfGnfDZllKJWtZaWUQ1i5zQ'})
//       .then(currentToken => {
//         if(currentToken){
//           console.log('Client token:', currentToken)
//         } else {
//           console.log('failed to generate')
//         }

//       });
//       console.log('FCM Token:', token);
//     } else {
//       console.log('Notification permission denied.');
//     }
//     // Handle foreground notifications
//     onMessage(messaging, (payload) => {
//       console.log('Foreground Message:', payload);
//       // Handle the notification or update your UI
//     });
//   } catch (error) {
//     console.error('Error setting up notifications:', error);
//   }
// };
// export { messaging, setupNotifications };