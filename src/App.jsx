import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Row from "./components/Row/Row"
import Footer from "./components/Footer/Footer"
import { trending,thriller,sciFi,animation,action,comedy } from "./urls";
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Row title="Trending" url={trending} ></Row>
    <Row title="Sci-fi & Fantasy" url={sciFi} ></Row>
    <Row title="Animation" url={animation} ></Row>
    <Row title="Comedy" url={comedy} ></Row>
    <Row title="Thrillers" url={thriller} ></Row>
    <Row title="Action" url={action} ></Row>
    <Footer></Footer>
    </>
  )
}

export default App
