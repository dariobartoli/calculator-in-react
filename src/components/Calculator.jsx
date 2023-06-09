import React from 'react'
import { CalculatorState } from './CalculatorState'
import { CalculatorScreen } from './CalculatorScreen'
import { Button } from './Button'

export const Calculator = () => {
  return (
    <CalculatorState>
        <div className='main'>
            <CalculatorScreen></CalculatorScreen>
            <div className='calculator-container'>
              <div className="line-container">
                <Button type="action" value="AC"/>
                <Button type="operator" value="%"/>
                <Button type="action" value="<="/>
                <Button type="operator" value="/"/>
              </div>
              <div className="line-container">
                <Button type="number" value="7"/>
                <Button type="number" value="8"/>
                <Button type="number" value="9"/>
                <Button type="operator" value="*"/>
              </div>
              <div className="line-container">
                <Button type="number" value="4"/>
                <Button type="number" value="5"/>
                <Button type="number" value="6"/>
                <Button type="operator" value="-"/>
              </div>
              <div className="line-container">
                <Button type="number" value="1"/>
                <Button type="number" value="2"/>
                <Button type="number" value="3"/>
                <Button type="operator" value="+"/>
              </div>
              <div className="line-container">
                <Button type="action" value="+/-"/>
                <Button type="number" value="0"/>
                <Button type="action" value="."/>
                <Button type="action" value="="/>
              </div>
            </div>
        </div>
    </CalculatorState>
  )
}
