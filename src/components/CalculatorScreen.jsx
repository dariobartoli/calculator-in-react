import React from 'react'
import { useAppContext } from './CalculatorState'

export const CalculatorScreen = () => {
    const calculator = useAppContext()
  return (
    <div className='screenContainer'>
        <div className='datosContainer'>
          <div>
            Memory: {calculator.memory}
          </div>
          <div>
            Operation: {calculator.operation}
          </div>
        </div>
        <div className='result'>
            {calculator.currentValue}{calculator.isDecimal ? "." : ""}
        </div>
    </div>
    
  )
}
