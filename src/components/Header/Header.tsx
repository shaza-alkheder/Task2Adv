import Hero from '../Hero/Hero'
import Nav from '../Nav/Nav'
import TopNav from '../TopNav/TopNav'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <TopNav />
                <Nav />
                <Hero />
            </header>
        </>
    )
}

export default Header
