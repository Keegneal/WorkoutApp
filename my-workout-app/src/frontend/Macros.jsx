import React, {useState} from 'react'
import './Macros.css'
import { Button, Modal } from 'react-bootstrap';

 function Macros() {
  const[open, setOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [activity, setActivityLevel] = useState('');
  const [macros, setMacros] = useState(null);

  
  function calculateMacros() {
      const maintneceCals = weight * activity;
      const deficitCals = maintneceCals - 500;
      const proteinInGrams = 1 * weight
      const fatInGrams = 0.3 * weight
      const carbsInGrams = (deficitCals - (proteinInGrams * 4 + fatInGrams * 9)) / 4

      setMacros({
        maintneceCals: maintneceCals.toFixed(2),
        deficitCals: deficitCals.toFixed(2),
        protein: proteinInGrams.toFixed(2),
        fat: fatInGrams.toFixed(2),
        carbs: carbsInGrams.toFixed(2),
      });

      setOpen(true);
  }

  const handleClose= () =>{
    setOpen(false);
  }
  
 

  return (
    <div>
    <div className='macro-container'>
    <h2 >Calculate Your Recommended Macros</h2>
    <form onSubmit={(e) => { e.preventDefault(); calculateMacros(); }}>
      <div className='macro-input-weight'>
          <input className= 'macro-input-field' type="number" placeholder= 'Weight (lbs)' value={weight} onChange={(e) => setWeight(e.target.value)} required />
        
      </div>
      <div className='button-container'>
        <div className='activity-buttons'>
          <button className='activity-button' type="button" onClick={() => setActivityLevel(14)}>Sedentary</button>
          <button className='activity-button' type="button" onClick={() => setActivityLevel(15)}>Moderate</button>
          <button className='activity-button' type="button" onClick={() => setActivityLevel(16)}>Active</button>
      </div>
      <button className= "calc-button" type="submit">Calculate</button>
      </div>
    </form>
    </div>


    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Recommended Macros</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    {macros && (
      <div className='display-macros'>
        <p>Maintenance Calories: {macros.maintneceCals}</p>
        <p>Deficit Calories: {macros.deficitCals}</p>
        <p>Protein: {macros.protein}g</p>
        <p>Fat: {macros.fat}g</p>
        <p>Carbohydrates: {macros.carbs}g</p>
      </div>
    )}
    </Modal.Body>
    <Modal.Footer> 
      <Button variant= "secondary" onClick ={handleClose}>
        Close
        </Button>
      </Modal.Footer>
  </Modal>
  </div>
);


}


export default Macros;