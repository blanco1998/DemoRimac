import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../context/AppProvider"

const PlanFooter = () => {

    const navigate = useNavigate()
    const { operations } = useContext(AppContext)
    const { amount } = operations

    return (
        <footer className='plan__footer'>
            <div className='plan__footer__info'>
                <p className='plan--amount'>${amount || '0.00'}</p>
                <p className='plan--small'>MENSUAL</p>
            </div>
            <div className='plan__footer__action'>
                <button className='button button--red' onClick={() => navigate('/thanks')}>LO QUIERO</button>
            </div>
        </footer>
    )
}

export default PlanFooter