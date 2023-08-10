import React from 'react'
import { GoBell} from 'react-icons/go'
import Button from '../components/Button'

const ButtonPage = ( { 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline, 
    rounded,
  ...rest } ) => {

    console.log(rest)

  return (
    <button {...rest} className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children} <GoBell/></button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!success)
      + Number(!!danger)
    
    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true')
    }
  }
}

export default ButtonPage