//@ts-nocheck
"use client"
import React, { useEffect } from 'react';
import { setupNotifications } from '../firebase';
import { toastNotification, sendNativeNotification } from '../notificationHelpers';
import useVisibilityChange from '../useVisibilityChange';
import { register } from '../serviceWorker';
import useServiceWorkerRegistration from '../useServiceWorkerRegistration'
import { platform } from 'os';
import { messaging } from '../firebase'
import { getToken, isSupported } from '@firebase/messaging'



export default function Home() {

  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     // Generate Token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BOoIrhz1ybLoFKswQgAfT8gGZ3r4IKjtMytNC8PttUCKFBh86Q6LO8kkf7KYlPseLfGnfDZllKJWtZaWUQ1i5zQ",
  //     });
  //     console.log("Token Gen", token);
  //     // Send this token  to server ( db)
  //   } else if (permission === "denied") {
  //     alert("You denied for the notification");
  //   }
  // }

  useEffect(() => {
    (async () => {
      const hasFirebaseMessagingSupport = await isSupported();
      if (hasFirebaseMessagingSupport) {
        const { requestForToken } = await import("../firebase");
        await requestForToken();
      }
    })()
    // Req user for notification permission
    // requestPermission();
  }, []);

  // // const analytics = (): firebase.analytics.Analytics => firebase.analytics()
  // const isForeground = useVisibilityChange();
  // useEffect(() => {
  //   setupNotifications((message) => {
  //     if (isForeground) {
  //       // App is in the foreground, show toast notification
  //       toastNotification({
  //         title,
  //         description: body,
  //         status: "info",
  //       });
  //     } else {
  //       // App is in the background, show native notification
  //       sendNativeNotification({
  //         title,
  //         body,
  //       });
  //     }
  //   });

    
  //   // add isForeground as the dependency? 
  // }, []);

  

  
  

  // // analytics().logEvent();

  // if (platform() !== 'browser') return;
  // console.log('This is your navigator: ', navigator);

  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <button onClick={e => {console.log(e)} }className="border border-red-400 rounded text-3xl px-4 py-2 hover:bg-yellow-300">Click me</button>
    </div>
    </main>
  );
}

// register();