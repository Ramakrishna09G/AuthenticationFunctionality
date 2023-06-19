// Write your JS code here
import Header from '../Header/index'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <>
    <div className="authentication-functionality-container">
      <Header />
      <h1 className="main-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
