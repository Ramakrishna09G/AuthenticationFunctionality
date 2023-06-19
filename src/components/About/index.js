// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <>
    <div className="authentication-functionality-container">
      <Header />
      <h1 className="main-heading">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
