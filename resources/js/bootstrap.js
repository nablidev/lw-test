/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



import Pusher from 'pusher-js';
window.Pusher = Pusher;

import Echo from 'laravel-echo';

//start of added by me
let echo = new Echo({
    namespace: false, //important to not prefix event names with a dot when listening to them
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

//console.log(echo);


window.Echo = echo;


window.Echo.channel('products')
    .pusher.connection.bind('connected', () => {
    console.log('Subscribed to products channel successfully');
});

window.Echo.channel('emails')
    .pusher.connection.bind('connected', () => {
    console.log('Subscribed to emails channel successfully');
});

/*
window.Echo.channel('products')
    .listen('ProductsFetchedEvent', (event) => {
        // Show the event message
        console.log('event received');
        // Store the books data in the global variable
        //window.books = event.books;
        // Show the books data in the console
        console.log(event.products);
        //emit the event to the DummyBooksListComponent
        //Livewire.emitTo('dummy-books-list-component', 'BooksFetchedEvent', event.books);
    });
*/

window.Echo.channel('emails')
    .listen('ProductListEmailSentEvent', (event) => {
        // Show the event message
        console.log('event received');
        // Store the books data in the global variable
        //window.books = event.books;
        // Show the books data in the console
        console.log(event.message);
        //emit the event to the DummyBooksListComponent
        //Livewire.emitTo('dummy-books-list-component', 'BooksFetchedEvent', event.books);
    });

//Alpine

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

Alpine.plugin(persist)

import Toaster from '../../vendor/masmerise/livewire-toaster/resources/js';

Alpine.plugin(Toaster);

window.Alpine = Alpine;
Alpine.start();



//end of added by me



/*
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});
*/

/*
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});
 */


