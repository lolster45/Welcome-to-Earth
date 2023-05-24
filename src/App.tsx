//Components...
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Continents from "./components/Continents"
import Countries from "./components/Countries"
import Languages from "./components/Languages"
import NavMenu from "./components/NavMenu"

//Libraries...
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

//Styles...
import "./index.scss"


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com/graphql"
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <section className="home-bg">
          <div className="blur-bg"></div>
          <div className="cool-bg"></div>
          <header>
            <h1 className="main-title">Welcome to Earth</h1>
            <h4>What would you like to explore?</h4>
          </header>
          <main>
            <NavMenu/>
            <div className="info-block">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Continents" element={<Continents/>}></Route>
                <Route path="/Countries" element={<Countries/>}></Route>
                <Route path="/Languages" element={<Languages/>}></Route>
              </Routes>
            </div>
          </main>
        </section>
      </Router>
    </ApolloProvider>
  )
}

export default App
