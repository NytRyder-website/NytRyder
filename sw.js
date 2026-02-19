// Service Worker for Push Notifications
self.addEventListener('push', function(event) {
    console.log('Push received:', event);
    
    let data = {};
    if (event.data) {
        data = event.data.json();
    }
    
    const options = {
        body: data.body || 'New notification',
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
        badge: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/',
            timestamp: Date.now()
        },
        actions: [
            {
                action: 'open',
                title: 'Open App'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(
            data.title || 'Nyt Ryder', 
            options
        )
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/')
        );
    } else {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Optional: Handle service worker installation
self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
});
