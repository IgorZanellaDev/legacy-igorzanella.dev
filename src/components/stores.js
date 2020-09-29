import { writable } from 'svelte/store';

export const animations = writable({
    home: true,
    home2: true,
    about: true,
});
export const chatOnline = writable(false);