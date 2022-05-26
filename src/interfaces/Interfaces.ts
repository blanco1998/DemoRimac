// Archivo de interfaces general, omito cualquier otro de este tipo


export interface Props { // Para componentes
    
    children?: JSX.Element | JSX.Element[]
    message?: string
    // PlanItemChoice
    paragraph?: string
    title?: string
    image?: string
    precio?: number

}


export interface User { // Para usuarios en context
    Id: number
    Dni: string
    Name: string
    Email: string
    Phone: number
    Plate: string
    // Ya que es una demo y la api es fake, no crearemos mas interfaces para los datos de auto
    CarModel: string
    CarYear: string
    CarBranch: string
}


export interface Operations {
    amount: number
    item1: number
    item2: number
    item3: number
}


export interface AppState { // Para context
    special: boolean
    setSpecial: any
    usuario: User
    setUsuario: any
    operations: Operations
    setOperations: any
}
