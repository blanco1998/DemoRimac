import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import AppProvider from '../context/AppProvider'

const CommonLayout = () => {

  return (
    
    <>
      <AppProvider>
        <Header />
        <Outlet />
      </AppProvider>
    </>
  )
}

export default CommonLayout