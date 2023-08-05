import React from 'react'
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header' 
import About from './sections/about/About';
import Creations from './sections/creations/Creations';
import Portfolio from './sections/portfolio/Portfolio';
import ShopLinks from './sections/shoplinks/ShopLinks';
import FAQs from './sections/faq/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';


const App = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Creations />
            <Portfolio />
            <ShopLinks />
            <FAQs />
            <Contact />
            <Footer />
            <FloatingNav />

        </main>
    )
}
export default App