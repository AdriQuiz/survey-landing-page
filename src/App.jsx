import Layout from "./Layouts/Layout"
import Customer from "./pages/Customer"
import Hero from "./pages/Hero"
import Measure from "./pages/Measure"
import Footer from "./pages/Footer"
import Happy from "./pages/Happy"

function App() {
  return (
    <Layout>
      <Hero />
      <Customer />
      <Measure />
      <Happy />
      <Footer />
    </Layout>
  )
}

export default App
