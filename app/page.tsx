//@ts-nocheck
"use client"
import React, { useEffect } from 'react';
import { setupNotifications } from '../firebase';
import { toastNotification, sendNativeNotification } from '../notificationHelpers';
import useVisibilityChange from '../useVisibilityChange';
import { register } from '../serviceWorker';

export default function Home() {
  // const analytics = (): firebase.analytics.Analytics => firebase.analytics()
  const isForeground = useVisibilityChange();
  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title,
          description: body,
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title,
          body,
        });
      }
    });
    // add isForeground as the dependency? 
  }, []);

  // analytics().logEvent();



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <button onClick={e => {console.log(e)} }className="border border-red-400 rounded text-3xl px-4 py-2 hover:bg-yellow-300">Click me</button>
    </div>
    </main>
  );
}

register();