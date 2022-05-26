import { useContext, useEffect } from "react"
import LoginBanner from "../components/login/LoginBanner"
import LoginForm from "../components/login/LoginForm"
import { AppContext } from "../context/AppProvider"


const Login = () => {

  const { setSpecial } = useContext(AppContext)
  
  useEffect(() => {
    setSpecial(true)
  }, [])

  return (
    
    <main>
      <LoginBanner />
      <LoginForm />
    </main>
  )
}

export default Login