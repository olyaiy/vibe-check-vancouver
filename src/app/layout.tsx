import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Variable.woff2',
      weight: '300 900',
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

const clash = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    }
  ],
  variable: '--font-clash',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${clash.variable}`}>
      <body>{children}</body>
    </html>
  )
}
