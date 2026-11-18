import { useState } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { HelpSection } from './components/HelpSection'
import { AdoptionFairSection } from './components/AdoptionFairSection'
import { BottomNavBar } from './components/BottomNavBar'
import {
  AVAILABLE_ADOPTION_COUNT,
  FAIR_PETS_TODAY,
} from './data/homepageData'

function App() {
  const [activeTab, setActiveTab] = useState('inicio')

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function handleTabChange(tabId) {
    setActiveTab(tabId)

    if (tabId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (tabId === 'adotar') {
      scrollToSection('feira-adocao')
    } else if (tabId === 'ajudar' || tabId === 'transparencia') {
      scrollToSection('ajudar')
    }
  }

  return (
    <div id="inicio" className="mx-auto flow-root min-h-dvh max-w-md">
      <div className="mx-[16px] my-[24px] pb-24 space-y-7">
        <Header />

        <main className="space-y-8">
          <HeroSection
            availableCount={AVAILABLE_ADOPTION_COUNT}
            onViewAnimals={() => handleTabChange('adotar')}
          />

          <HelpSection />

          <AdoptionFairSection pets={FAIR_PETS_TODAY} />
        </main>
      </div>

      <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export default App
