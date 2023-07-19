import { useState } from 'react'
import Header from './components/Header'
import Content from "./components/Content"
import BodyComponent from './components/BodyComponent'
import BodyConten from './components/BodyConten'
import Footer from './components/Footer'
import TabComponente from './components/TabComponent'




function App() {

  return (
    <>
    <Header />
    <TabComponente/>
    <Content />
   
    <BodyComponent />
    <BodyConten />
    <Footer />
   
    
    </>
  )
}

export default App
