// import { useEffect } from "react";
// import { useClient } from 'next/client';



// export const useServiceWorkerRegistration = () => {
//   useEffect(() => {
//     const register = async () => {
//       if (typeof window !== 'undefined' && window.navigator) {
//         if ('serviceWorker' in window.navigator) {
//           try {
//             const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
//             console.log('Service Worker registered with scope:', registration.scope);
//           } catch (error) {
//             console.error('Error registering service worker:', error);
//           }
//         }
//       }
//     };

//     register();

//     // Cleanup function (optional)
//     return () => {
//       // You can perform any cleanup here if needed
//     };
//   }, []); // Empty dependency array to ensure useEffect runs only once on component mount
// };