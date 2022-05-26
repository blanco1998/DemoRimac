import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"

const PickerAmount = () => {

    const { operations, setOperations } = useContext(AppContext)
    const { amount } = operations

    const validateIncrease = () => {

        setOperations({
            ...operations, 
            amount: amount + 100,
            total: amount
        })
    }

    const validateDecrease = () => {

        setOperations({
            ...operations, 
            amount: amount - 100,
            total: amount
        })
    }

    return ( 
        // 1. La suma asegurada debe estar entre el MIN y MAX 
        // valor y aumenta o disminuye cada $ 100. 
        <div className='picker'>
            <div className='picker__title'>
                <p>Indica la suma asegurada</p>
                <p className='picker__title--small'>MIN $12.500 | MAX $16.500</p>
            </div>

            <div className='picker__widget'>
                <p className='picker__widget--sizing picker__widget--violet'
                    onClick={validateDecrease}>
                    -
                </p>

                <p className='picker__widget--sizing'>
                    ${amount} 
                </p>

                <p className='picker__widget--sizing picker__widget--violet'
                    onClick={validateIncrease}>
                    +
                </p>
            </div>
        </div>  
    )
}

export default PickerAmount