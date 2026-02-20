// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Your Firebase config
firebase.initializeApp({
    apiKey: "AIzaSyDnBExWhYrsXlpyVJsseCdfYbnNgqiKS6Q",
    authDomain: "nytryder-fbf3e.firebaseapp.com",
    databaseURL: "https://nytryder-fbf3e-default-rtdb.firebaseio.com",
    projectId: "nytryder-fbf3e",
    storageBucket: "nytryder-fbf3e.appspot.com",
    messagingSenderId: "566810796737",
    appId: "1:566810796737:web:1a92fca279609eaaefaa40"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    
    const notificationTitle = payload.notification?.title || 'New Notification';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new notification',
        icon: '/icon.png',
        badge: '/badge.png',
        vibrate: [200, 100, 200]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
