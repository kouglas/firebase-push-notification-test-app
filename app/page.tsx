"use client"
import React, { useEffect } from 'react';
import { isSupported } from '@firebase/messaging'



export default function Home() {

  
  useEffect(() => {
    (async () => {
      const hasFirebaseMessagingSupport = await isSupported();
      if (hasFirebaseMessagingSupport) {
        const { requestForToken } = await import("../firebase");
        await requestForToken();
      }
    })()
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <button onClick={e => {console.log(e)} }className="border border-red-400 rounded text-3xl px-4 py-2 hover:bg-yellow-300">hiiii there</button>
    </div>
    </main>
  );
}

