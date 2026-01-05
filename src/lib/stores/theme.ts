import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Check localStorage or system preference
const getInitialTheme = (): Theme => {
	if (!browser) return 'light';

	const stored = localStorage.getItem('theme') as Theme;
	if (stored) return stored;

	// Check system preference
	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

// Save to localStorage when changed
theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
