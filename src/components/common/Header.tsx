import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";



const Header = () => {

  const { special } = useContext(AppContext)

  return (
    
    <header 
      className={`header ${special ? 'header--special' : 'header--normal'}`}>

        <div>
          <img src='assets/svgs/logo.svg' alt='rimac_logo' />
        </div>

        <div className='header__call'>
          <img src='assets/svgs/phone.svg' alt="phone_ico" />
          <p className='header__call--ml-5'>Llamanos</p>
        </div>

    </header>
  )
}

export default Header


