import  {useState}from 'react'
import './Bmi.scss'
import {motion} from 'framer-motion'

function Bmi() {
  const boxVariant={
    visible:{ opacity:1, scale:1,transition:{duration: 0.5} },
    hidden:{ opacity:1, scale:0 }
  }

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
      if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBMI(bmiValue.toFixed(2));
      }
    };

    function interpretBMI(bmi) {
        if (bmi < 18.5) {
          return 'Underweight';
        } else if (bmi < 24.9) {
          return 'Normal weight';
        } else if (bmi < 29.9) {
          return 'Overweight';
        } else {
          return 'Obese';
        }
      }
  return (
    <div className='Bmi'>
    <h1>Let's Know Your BMI!!</h1>
    <div>
      <label>Weight (kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
    </div>
    <div>
      <label>Height (cm):</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
    </div>
    <button onClick={calculateBMI} className='Bmi-btn'>Calculate BMI</button>
    {bmi !== null && (
      <motion.div
      variants={boxVariant}
      animate="visible"
      initial="hidden"
      
      >
        <h2>Your BMI: {bmi}</h2>
        <p>Interpretation: {interpretBMI(bmi)}</p>
      </motion.div>
    )}
  </div>
   
  )


}

export default Bmi


