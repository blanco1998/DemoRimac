import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppProvider"

const Thanks = () => {

  const { setSpecial, usuario } = useContext(AppContext)
  const { Email } = usuario
  
  useEffect(() => {
    setSpecial(false)
  }, [])

  return (
    
    <main className='resume'>

      <div>
        <img src='assets/images/man-thanking-md.svg' alt="thanking man" className='resume__image' />
      </div>

      <div className='resume__section'>
        <p className="resume__section--text-red">¡Te damos la bienvenida!</p>
        <p>Cuenta con nosotros para proteger tu vehículo</p>
      </div>

      <div className='resume__section resume__section--margin-top'>
        <p className='resume__section--text-small'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
        <p className='resume__section--text-small'><b>{Email}</b></p>
      </div>

      <div className='resume__section'>
        <button className='button button--red'>COMO USAR MI SEGURO</button>
      </div>

      <footer className='resume__footer'>
        <p className='resume__section--text-small resume__footer--margin-top'>
          © 2021 RIMAC Seguros y Reaseguros.
        </p>
      </footer>

    </main>
  )
}

export default Thanks