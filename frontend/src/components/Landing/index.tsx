import React from 'react'
import Header from './Header'
import Herosection from './Herosection'
import Howitsworks from './Hwt'
import Faq from './Faq'
import Footer from './Footer'


const Landing: React.FC = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Howitsworks />
            <Faq />
            <Footer />
        </ >
    )
}

export default Landing