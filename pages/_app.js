import Layout from "../components/layouts/main"
import { useEffect } from "react"
import Fonts from "../components/fonts"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import Chakra from "../components/chakra"
import Script from "next/script"
import { GTM_ID, pageview } from "../lib/gtm"

function Website({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview)
    return () => {
      router.events.off("routeChangeComplete", pageview)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${GTM_ID}');
      `,
        }}
      />
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  )
}

export default Website
