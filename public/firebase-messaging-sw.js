// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyDKf4CQ68mk1BT3mTPI1vUJpMXhQu_uklI",
  authDomain: "push-notifications-test-ddde1.firebaseapp.com",
  projectId: "push-notifications-test-ddde1",
  storageBucket: "push-notifications-test-ddde1.appspot.com",
  messagingSenderId: "409374673910",
  appId: "1:409374673910:web:e3c8a75069bd334ba955d7"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] received background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}

self.addEventListener("push", (event) => {

  const notif = event.data.json().notification;

  event.waitUntil(self.registration.showNotification(notif.title , {
      body: notif.body,
      icon: notif.image,
      data: {
          url: notif.click_action
      }
  }));

});

self.addEventListener("notificationclick", (event) => {

  event.waitUntil(clients.openWindow(event.notification.data.url));

});