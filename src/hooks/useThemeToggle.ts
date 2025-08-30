import { useCallback, useEffect, useState } from 'react';

export function useThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const isDarkMode =
			savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		setIsDark(isDarkMode);
	}, []);

	const toggleTheme = useCallback(() => {
		const newIsDark = !isDark;
		if (newIsDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		setIsDark(newIsDark);
	}, [isDark]);

	return { isDark, toggleTheme };
}
