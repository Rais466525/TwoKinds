import HTMLFlipBook from "react-pageflip"
import Page from "./Page"
import Cover from "./pages/Cover/Cover"
import FirstPage from "./pages/FirstPage/FirstPage.jsx"
import About from "./pages/About/About.jsx"
import Services from "./pages/Services/Services"
import Test from "./pages/mkm/Kmjkjl.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import EndPage from './pages/EndPage/EndPage'


function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={400} showCover="true">
      <Page number={1}>
        <Cover />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <About />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <Test />
      </Page>
      <Page number={6}>
        <Projects />
      </Page>
      <Page number={7}>
        <Projects />
      </Page>
      <Page number={8}>
        <EndPage />
      </Page>
    </HTMLFlipBook>
  )
}

export default MyBook