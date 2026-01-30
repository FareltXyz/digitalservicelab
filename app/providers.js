"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export default function Providers({children}) {
    return (
        <NextThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}  disableTransitionOnChange>
            {children}
        </NextThemeProvider>
    )
}