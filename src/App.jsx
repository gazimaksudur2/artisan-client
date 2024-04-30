import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  // const { loading } = useContext(AuthContext);
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between items-center">
        <ScrollRestoration/>
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>
  )
}

export default App
