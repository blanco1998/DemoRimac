import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"

const PickerAmount = () => {

    const { operations, setOperations } = useContext(AppContext)
    const { amount } = operations
    console.log(amount)

    return (
        <div className='picker'>
            <div className='picker__title'>
                <p>Indica la suma asegurada</p>
                <p className='picker__title--small'>MIN $12.500 | MAX $16.500</p>
            </div>

            <div className='picker__widget'>
                <p className='picker__widget--sizing picker__widget--violet'>
                    -
                </p>

                <p className='picker__widget--sizing'>
                    ${amount || '20.00'}
                </p>

                <p className='picker__widget--sizing picker__widget--violet'
                    onClick={() => setOperations({
                        ...operations, 
                        amount: amount + 100
                    })}>
                    +
                </p>
            </div>
        </div>  
    )
}

export default PickerAmount