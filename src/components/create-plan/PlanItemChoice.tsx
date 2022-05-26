import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppProvider"
import { Props } from "../../interfaces/Interfaces"

const PlanItemChoice = ({paragraph, title, image, precio}: Props) => {

    const [show, setShow] = useState(false)
    const { operations, setOperations } = useContext(AppContext)

    const value = (checked: any) => {

        if(checked) {

            if(precio === 15) {
                setOperations({
                    ...operations,
                    item1: precio
                })
            }
    
            if(precio === 20) {
                setOperations({
                    ...operations,
                    item2: precio
                })
            }
    
            if(precio === 50) {
                setOperations({
                    ...operations,
                    item3: precio
                })
            }

        } else {

            if(precio === 15) {
                setOperations({
                    ...operations,
                    item1: 0
                })
            }
    
            if(precio === 20) {
                setOperations({
                    ...operations,
                    item2: 0
                })
            }
    
            if(precio === 50) {
                setOperations({
                    ...operations,
                    item3: 0
                })
            }
        }
        
    }


    return (
        <div className='planItem planItem--border'>

            <div>
                <img src={image} alt='icon' className='planItem__image' />
            </div>

            <div className='planItem--fill'>
                <div className='planItem__text-check'>
                    <p>{title}</p>
                    <input type='checkbox' onChange={e => value(e.target.checked)} />
                </div>

                {   !show ? null :
                    <p className='planItem__paragraph'>
                    {`He salido de casa a las cuatro menos cinco para 
                    ir a la academia de ingles de mi pueblo (Sant Cugat, 
                    al lado de Barcelona) con mi bici, na llego a 
                    la academia que está en el centro del pueblo en una 
                    plaza medio-grande y dejo donde siempre la bici 
                    atada con una pitón a un sitio de esos de poner 
                    las bicis`}
                    </p>
                }

                <p onClick={() => setShow(!show)} className='planItem__show'>
                    {!show ? 'VER MAS ˅' : 'VER MENOS ˄'}
                </p>
                
            </div>

        </div>
    )
}

export default PlanItemChoice



