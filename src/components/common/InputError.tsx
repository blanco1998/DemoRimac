import { Props } from "../../interfaces/Interfaces"


const InputError = ({message}: Props) => {
  return (
    <span className='form__error'>* {message}</span>
  )
}

export default InputError