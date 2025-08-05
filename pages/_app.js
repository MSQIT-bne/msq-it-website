import '../styles/globals.css'
import '../styles/hero-animation.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MSQ IT - Making IT Simple For You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/MSQ-it-logo-favicon.png" />
        <link rel="icon" href="/MSQ-it-logo-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/MSQ-it-logo-favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
