import { useState } from 'react'
import './App.css'


function App() {
  const [Weight, setWeight] = useState("")
  const [Height, setHeight] = useState("")
  const [Age, setAge] = useState("")
  const [Gender, setGender] = useState("")

  const [isWeight, setIsWeight] = useState(true)
  const [isHeight, setIsHeight] = useState(true)
  const [isAge, setIsAge] = useState(true)
  const [isBmi , setIsBmi] = useState("")
  

  const Validate = (e) => {
    const { name, value } = e.target

    if (value == "" || !!value.match('^[0-9]+$') ) {
      if (name == "weight") {
        setWeight(value)
        setIsWeight(true)
      } else if (name == "height") {
        setHeight(value)
        setIsHeight(true)
      } else if (name == "age") {
        setAge(value)
        setIsAge(true)
      }
    } else {
      if (name == "weight") {
        setIsWeight(false)
      } else if (name == "height") {
        setIsHeight(false)
      } else if (name == "age") {
        setIsAge(false)
      }
    }
  }

  const handleReset = () => {
    setWeight("")
    setHeight("")
    setAge("")
    setGender("")
    setIsBmi("")
    setIsWeight(true)
    setIsHeight(true)
    setIsAge(true)
  }

  const handleCalculate = () => {
    const bmi = Weight / ((Height / 100) * (Height / 100))
    setIsBmi(parseFloat(bmi.toFixed(2)));
    if(bmi<18.5){
      alert('You are Underweight .  TIME TO EAT!')
    }
    else if(bmi>=18.5 && bmi<24.9){
      alert('Good Job! You are managing a Healthy body')
    }
    else{
      alert('You are OverWeight .  CHANGE YOUR LIFESTYLE!')
    }


  }

  

  return (
    <>
      <div className='bg-light d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%" }}>
        <div className='bg-dark p-5 rounded-2 text-light' style={{ width: "500px" }}>
          <h1>BMI CALCULATOR</h1>
          <p>Calculate your Body Mass Index Easily</p>

          <div className='bg-primary p-3 mt-4 d-flex justify-content-center align-items-center rounded-5' style={{ height: '150px' }}>
            <h1 className='text-light'>BMI is <span className='text-warning'>{isBmi}</span> kg/m2  </h1>
          </div>

          <div className='mt-4'>
            <select id="gender" name="gender" className='form-control' value={Gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className='mt-4 '>
            <input type="text" className='form-control' placeholder='Enter your Age' name='age' value={Age} onChange={(e) => Validate(e)} />
            {!isAge && <p className='text-danger'>*Please enter a valid age.</p>}
          </div>

          <div className='mt-4'>
            <input type="text" className='form-control' value={Weight} placeholder='Enter your weight in kg' name='weight' onChange={(e) => Validate(e)} />
            {!isWeight && <p className='text-danger'>*Please enter a valid weight in kg.</p>}
          </div>

          <div className='mt-4 '>
            <input type="text" className='form-control' value={Height} placeholder='Enter your height in cm' name='height' onChange={(e) => Validate(e)} />
            {!isHeight && <p className='text-danger'>*Please enter a valid height in cm.</p>}
          </div>

          <div className='mt-4 d-flex gap-5' style={{ marginLeft: "110px" }}>
            <button className='btn btn-warning' onClick={handleReset}>Reset</button>
            <button  disabled={Height && Weight && Age ? false:true } className='btn btn-success' onClick={handleCalculate} >Calculate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
