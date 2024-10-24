import React, { useMemo,useState } from 'react' //import usememo ,usestate
import './App.css'

export default function App() {
  const [weight, setWeight] = useState(80); //created usestate(contains 2 arguments (initialvalue and finalvalue)) with default value as 80
  const [height, setHeight] = useState(180);//created usestate with default value as 180



  function onHeightChange(event) {
    setHeight(event.target.value)
  }
  function onWeightChange(event) {//created the function where the finalvalue will be stored in setweight and will be stored/displayed by using target.value
    setWeight(event.target.value)
  }
  const output = useMemo(() => {// output- final result 
    const calculateHeight = height / 100; //height will be converted to m by dividing by 100
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)// formula to calculate BMI and tofixed(1)means decimal upto one digit will be visible
  }, [weight, height]);
  return (
    <div className='main'>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight} kg</p>
        <input className='input-slider' type="range" step="1" min="40" max="200" onChange={onWeightChange} /> 
        <p className='slider-output'>Height:{height} cm</p>
        <input className='input-slider' type="range" min="140" max="220" onChange={onHeightChange} />
      </div>
      <div className='output-section'>
        <p>Your BMI is:</p>
        <p className='output'>{output}</p>
      </div>
    </div>
        //onchange -when slider will move the value will be changed and that changed value will be called by onweightchange function

  )
}
