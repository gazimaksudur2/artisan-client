import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useContext } from "react"
import { AuthContext } from "./providers/AuthProvider"

function App() {
  // const { loading } = useContext(AuthContext);
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between items-center">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>
  )
}

export default App
