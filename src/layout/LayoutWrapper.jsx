import Navbar from "../components/Navbar/Navbar"
import "./wrapper.css"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='main-wrapper-layout'>{children}</div>
    </>
  )
}

export default LayoutWrapper
