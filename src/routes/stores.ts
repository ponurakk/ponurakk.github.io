import { writable } from "svelte/store";

export const isLoaded = writable<boolean>(false);
