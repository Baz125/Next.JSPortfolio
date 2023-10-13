"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Navbar2 from "@/components/Navbar2"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { usePathname } from 'next/navigation'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  })

{

  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <html lang="en" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          {isHomePage ? <Navbar /> : <Navbar2 />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}