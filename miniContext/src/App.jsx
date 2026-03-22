import './App.css'
import UserContext from './Contexts/UserContext'
import Login from './Login'
import Profile from './Profile'

function App() {

  return (
    <>
    hello
    <UserContext>
      <Login/>
      <Profile/>

    </UserContext>

    </>
  )
}

export default App
