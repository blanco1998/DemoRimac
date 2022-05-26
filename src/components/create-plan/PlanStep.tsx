import { useNavigate } from "react-router-dom"

const PlanStep = () => {
    
    const navigate = useNavigate()

    return (
        <section className='plan__step'>
            <img src='assets/images/back-arrow.svg' 
                    alt='back arrow' 
                    className='plan__step--image'
                    onClick={() => navigate(-1)} />

                <p>PASO 2 DE 2</p>
                
            <div className='plan__step--dummy-bar'></div>
        </section>
    )
}

export default PlanStep