import {React} from 'react'
import Hero from './Hero'
import Features from './Features'
import AditionalFeatures from './AdditionalFeatures'
import RateCalculator from './RateCalculator'
import FAQs from './FAQs'
import Footer from './Footer'

const Home = ({data}) => {
  return (
    <>
        <Hero data={data}/>
        <Features data={data} />
        <AditionalFeatures data={data} />
        <RateCalculator />
        <FAQs data={data} />
         <Footer data={data} /> 
    </>
  )
}

export default Home
