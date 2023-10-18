import Image from 'next/image'
import Header from './components/index/Header'
import DealsAndOffers from "./components/index/DealsAndOffers"
import HomeAndOutdoor from "./components/index/HomeAndOutdoor"
import ConsumerElectronics from "./components/index/ConsumerElectronics"

export default function Home() {
  return (
    <>
      <Header />
      <DealsAndOffers />
      <HomeAndOutdoor />
      <ConsumerElectronics />
    </>
  )
}

