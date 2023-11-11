import { Providers } from '@/utils/providers'
import TopMenu from '../layouts/TopMenu'
import MainHeader from '../layouts/MainHeader'
import Footer from '../layouts/Footer'
import MenuOverlay from '../layouts/MenuOverlay'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="fixed z-[-1] h-[100vh] w-full bg-[#F2F2F2]" />
      <div className="fixed top-0 z-50 w-full">
        <TopMenu />
        <MainHeader />
      </div>
      <MenuOverlay />
      <div className=" pt-[80px] md:pt-[130px] lg:pt-[150px] ">{children}</div>
      <Footer />
    </Providers>
  )
}
