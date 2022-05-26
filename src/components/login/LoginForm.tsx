import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../context/AppProvider"
import InputError from "../common/InputError"


type Data = {

    type: string
    doc: string
    phone: number
    plate: string
    agreement: boolean
}

type Errors = {

    doc: string
    phone: string
    plate: string
}

const URI = 'https://bruno-blanco.outsystemscloud.com/exposed_apis/rest/usuarios/getusuario'

const LoginForm = () => {

    const navigate = useNavigate()
    const { setUsuario } = useContext(AppContext)

    const { register, handleSubmit, formState: {errors} } = useForm<Data>()
    const [ messageErrors, setMessageErrors ] = useState<Errors>({
        doc: '',
        phone: '',
        plate: ''
    })

    const onSubmit = handleSubmit( async (data) => {

        const { type, doc, phone, plate, agreement } = data
        
        if(type === 'DNI' && doc.length !== 8) {
            setMessageErrors({
                ...messageErrors,
                doc: 'Un dni requiere 8 caracteres'
            })
            return
        }

        if(type === 'CE' && doc.length !== 10) {
            setMessageErrors({
                ...messageErrors,
                doc: 'Un ce requiere 10 caracteres'
            })
            return
        }

        if(plate.length !== 6) {
            setMessageErrors({
                ...messageErrors,
                plate: 'La placa requiere 6 caracteres'
            })
            return
        }

        if(String(phone).length !== 9) {
            setMessageErrors({
                ...messageErrors,
                phone: 'Un celular requiere 9 caracteres'
            })
            return
        }

        setMessageErrors({ doc: '', phone: '', plate: '' })
        
        try {
            // CONSIDERAR: 
            // Esta api fake es de un entorno de trabajo personal 
            // que suele vencer a los 15 dias si no hay actividad

            // probar dni fake 70000000
            
            const body = await fetch(`${URI}/${doc}`, {/*omito las config*/})
            const user = await body?.json()

            if(user.Id === 0) { // validacion dummy en caso no haya usuario
                console.log('No se hallo')
                return
            }

            setUsuario({...user, Plate: plate }) // guardamos la placa y la resp de la api
            navigate('/create-plan')
            
        } catch (e) {
            /* no hay UI definida para detallar el posible error, lo omitire */
            console.log(e)
        }

    })
    

    return (

        <section className='login'>
            <h3 className='login__text'>
                Dejanos tus datos
            </h3>

            <form onSubmit={onSubmit} className='form'>
                <div className='form__group'>
                    <select {...register('type', {required: true})} className='form__select form__select--shared'>
                        <option>DNI</option>
                        <option>CE</option>
                    </select>
                    <input {...register('doc', {required: true})}
                        id='doc'
                        name='doc'
                        type='text'
                        placeholder='Nro. de doc' 
                        className='form__input form__input--shared' 
                    />
                </div>
                {  errors.doc && <InputError message='Nro de doc necesario' /> }
                {  messageErrors.doc !== '' && <InputError message={messageErrors.doc} /> }

                <input {...register('phone', {required: true})}
                    type='number' 
                    placeholder='Celular' 
                    className='form__input' 
                /> 
                { errors.phone && <InputError message='Nro de celular necesario' /> }
                { messageErrors.phone !== '' && <InputError message={messageErrors.phone} /> }

                <input 
                    {...register('plate', {required: true})}
                    type='text' 
                    placeholder='Placa' 
                    className='form__input' 
                />
                { errors.plate && <InputError message='Nro de placa necesario' /> }
                { messageErrors.plate !== '' && <InputError message={messageErrors.plate} /> }

                <div className="form__group">
                    <input
                        {...register('agreement', {required: true})} 
                        type='checkbox' 
                        id='agreement' 
                        placeholder='Placa' 
                        className='form__input--checkbox' 
                    />
                    <label 
                        htmlFor='agreement' 
                        className='form__label form__label--checkbox'>
                        Acepto la Política de <u>Protecciòn de Datos Personales</u> y los <u>Términos y Condiciones.</u>
                    </label>
                </div>
                { errors.agreement && <InputError message='Debes aceptar nuestros terminos y condiciones' /> }

                <input type='submit' value='COTIZAR' className='button button--red button--mtop' />          
            </form>
        </section>
    )
}

export default LoginForm