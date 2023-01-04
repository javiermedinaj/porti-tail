import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
