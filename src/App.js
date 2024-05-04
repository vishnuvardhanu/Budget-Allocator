import { useState } from 'react';
import './App.css';
import Budgetdisplay from './components/Budegetdisplay';
import Allocation from './components/Allocation';
import UpdateAllocation from './components/UpdateAllocation';

function App() {
  const [currency,setCurrency] =useState("$");
  const [budget,setBudget] = useState(0);
  const [remaining,setRemaining] =useState(0);
  const [spent,setSpent]= useState(0);
  
  return (
    <div className="container m-10 p-0 ml-16 w-fit">
      <h1 className="text-4xl">Company's Budget Allocation</h1>
      <Budgetdisplay currency={currency} setBudget={setBudget} budget={budget} remaining={remaining} setRemaining={setRemaining} spent={spent}/>
      <h2 className="text-2xl">Allocation</h2>
      <Allocation setSpent={setSpent} spent={spent} currency={currency} remaining={remaining} setRemaining={setRemaining} />
      <h2 className="text-2xl">Change Allocation</h2>
      <UpdateAllocation />
    </div>
  );
}

export default App;
