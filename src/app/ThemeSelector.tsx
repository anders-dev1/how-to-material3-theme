'use client'

import {useTheme} from "next-themes";

export default function ThemeSelector()
{
    const {setTheme} = useTheme();

    return(
        <div className={"flex items-center"}>
            <div className={"p-5 surface-container rounded"}>
                <p className={"body-large"}>Hello</p>
            </div>

            <button
                onClick={() => setTheme('light')}
                className={"p-2 ml-2 h-12 primary-container rounded-3xl body-large"}>
                Light Mode
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={"p-2 ml-2 h-12 primary-container rounded-3xl body-large"}>
                Dark Mode
            </button>
        </div>
    );
}