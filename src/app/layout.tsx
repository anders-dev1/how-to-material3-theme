import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'
import Providers from "@/app/providers";

export const metadata: Metadata = {
    title: 'How to use Material 3 theme in React/NextJS',
    description: 'Go to andersmadsen.dev for more stuff.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
                  rel="stylesheet"/>
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
