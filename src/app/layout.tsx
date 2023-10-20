import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'
import Providers from "@/app/providers";

const roboto = Roboto({weight:["100", "300", "400", "500", "700", "900"], subsets:['latin']});

export const metadata: Metadata = {
    title: 'How to use Material 3 theme in React/NextJS',
    description: 'Go to andersmadsen.dev for more stuff.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={`surface ${roboto.className}`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
