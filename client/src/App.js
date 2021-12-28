import './App.css'
import Header from './Components/Header'
import Home from './Home'
import Events from './Events'
import Contact from './Contact'
import About from './About'
import { Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer'
import Sponsors from './Sponsors'
import { useLocation } from 'react-router'
import { useEffect } from 'react'

function App() {
    return (
        <div className="App">
            <Header />
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/sponsors" component={Sponsors} />
                </Switch>
            </ScrollToTop>

            <Footer />
        </div>
    )
}

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}

export default App
