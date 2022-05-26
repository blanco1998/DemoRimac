import { useState } from "react"
import PlanItemChoice from "./PlanItemChoice"

const PlanTabs = () => {

    const [tab, setTab] = useState(1)

    return (
        <div className='planTabs'>
            <p className='planTabs--big-text'>Agregar o quitar coberturas</p>

            <div className='planTabs__tabs'>
            <button className={`planTabs__tabs--button ${tab === 1 ? 'planTabs__tabs--active' : ''}`}
                onClick={() => setTab(1)}>
                Protege a tu auto
            </button>
            <button className={`planTabs__tabs--button ${tab === 2 ? 'planTabs__tabs--active' : ''}`}
                onClick={() => setTab(2)}>
                Protege a los que te rodean
            </button>
            <button className={`planTabs__tabs--button ${tab === 3 ? 'planTabs__tabs--active' : ''}`}
                onClick={() => setTab(3)}>
                mejora tu plan
            </button>
            </div>

            
            { tab === 1 && 
                <>
                    <PlanItemChoice 
                        title='Llanta robada' 
                        image='assets/images/car-wheel-stolen.svg' />
                    <PlanItemChoice 
                        title='Choque y/o pasarte la luz roja' 
                        image='assets/images/car-red-light.svg' />
                    <PlanItemChoice 
                        title='Atropello en la via Evitamiento' 
                        image='assets/images/car-crash.svg' />
                </>
            }
            
            { tab === 2 && <>SOME UI FOR THIS TAB</> /* dummy tab 2 */}
            { tab === 3 && <>SOME UI FOR THIS TAB</> /* dummy tab 3 */}

        </div>
    )
}

export default PlanTabs