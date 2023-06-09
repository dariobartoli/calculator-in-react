import React from 'react'
import { useAppContext } from './CalculatorState'

export const CalculatorScreen = () => {
    const calculator = useAppContext()
  return (
    <div>
        <div>
            Memory {calculator.memory}
            Operation {calculator.operation}
        </div>
        <div>
            {calculator.currentValue}{calculator.isDecimal ? "." : ""}
        </div>
    </div>
    
  )
}
