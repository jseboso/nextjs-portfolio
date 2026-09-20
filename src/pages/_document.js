import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body>
        <Script id="theme_switcher" strategy="beforeInteractive">
          {`
            if (!localStorage.theme) {
              localStorage.theme = 'dark';
              document.documentElement.classList.add('dark');
            } else if (localStorage.theme === 'dark') {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            } else {
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}