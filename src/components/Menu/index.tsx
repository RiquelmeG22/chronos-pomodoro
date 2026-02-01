import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react";


type EscolherTema = 'dark' | 'light';


export function Menu() {
    const [theme, setTheme] = useState<EscolherTema>(() => {
        const storageTheme = localStorage.getItem("theme") as EscolherTema || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }


    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink}
                href="#"
                aria-label="Ir para o Inicio"
                title="Ir para o Inicio"
            >
                <HouseIcon />
            </a>
            <a className={styles.menuLink}
                href="#"
                aria-label="Ver Historico"
                title="Ver Historico"
            >
                <HistoryIcon />
            </a>
            <a className={styles.menuLink}
                href="#"
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </a>
            <a className={styles.menuLink}
                href="#"
                aria-label="Mudar Tema"
                title="Mudar Tema"
                onClick={(event) => handleThemeChange(event)}

            >
              {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}