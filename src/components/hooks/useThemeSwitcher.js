import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const [mode, setMode] = useState("");

    useEffect(() => {
        // Matches the default `_document.js`'s beforeInteractive script already
        // applied at first paint: a missing preference defaults to "dark".
        const storedTheme = window.localStorage.getItem("theme");
        // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only available client-side, so the initial mode must be resolved here rather than in useState's initializer
        setMode(storedTheme === "light" ? "light" : "dark");
    }, [])

    useEffect(() => {
        if (!mode) return;

        window.localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "dark");
        document.documentElement.classList.toggle("light", mode === "light");
    }, [mode])

    return [mode, setMode];
}

export default useThemeSwitcher
