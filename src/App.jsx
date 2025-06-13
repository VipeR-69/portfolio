import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
    </>
  )
}

export default App