import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"

const PlanBanner = () => {

    const { usuario } = useContext(AppContext)
    const { Plate, CarBranch, CarModel, CarYear } = usuario

    return (
        <section className='plan__banner'>
            <div>
                <p className='plan__banner--xbig'>Mira las coberturas</p>
                <p className='plan__banner--small'>Conocer las coberturas para tu plan</p>
            </div>
            <div className='plan__banner__sub'>
                <div>
                    <p className='plan__banner--xsmall'>
                    Placa: {Plate || 'XXX-XXX'}
                    </p>
                    <p className='plan__banner--big'>
                    {CarBranch || 'Toyota'} {CarYear || '2019'}
                    </p>
                    <p className='plan__banner--big'>
                    {CarModel || 'G5'}
                    </p>
                </div>
                <div>
                    <img src='assets/images/man-thumb-up.svg' 
                        alt='man thumb up' 
                        className='plan__banner__image' />
                </div>
            </div>
        </section>
    )
}

export default PlanBanner