import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'kiyânaw Docs',
  description: 'Documentation for Transcribe, Language Database, and our mobile app'
}
 
const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image
          src="/kiyanaw-logo.png"
          alt="kiyânaw"
          width={24}
          height={24}
          style={{ borderRadius: '4px' }}
        />
        <span style={{ fontWeight: 'bold' }}>kiyânaw</span>
      </div>
    }
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © kiyânaw.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kiyanaw/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
