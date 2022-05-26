import { createContext, useState } from "react"
import { AppState, Operations, Props, User } from "../interfaces/Interfaces"



export const AppContext = createContext<AppState>({ } as AppState)


const AppProvider = ( {children}: Props ) => {

    const [special, setSpecial] = useState(false)
    const [usuario, setUsuario] = useState({} as User)
    const [operations, setOperations] = useState({} as Operations)

    return (

        <AppContext.Provider 
            value={{
                special,
                setSpecial,
                usuario,
                setUsuario,
                operations,
                setOperations
            }}>

            {children}

        </AppContext.Provider>
    )
}


export default AppProvider