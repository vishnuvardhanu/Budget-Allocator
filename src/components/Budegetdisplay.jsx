import React from "react";

function Budgetdisplay({currency,setBudget,budget,remaining,setRemaining,spent}){

    function handleBudget(e){
        if(e.target.value<spent)
            {
                alert(`You cannot reduce the budget value lower than spending`);
                e.target.value=budget;
            }
        if(e.target.value>20000)
        {
            alert(`The value cannot exceed remaining funds $20,000`)
            e.target.value=20000;
            setBudget(20000);
            setRemaining(e.target.value-spent);
        }
        if(e.target.value<0)
        {
            e.target.value=0;
        }
        setRemaining(e.target.value-spent);
        setBudget(e.target.value);
    }
    return(
        <div className="w-fit p-5 m-3 flex">
            {/* Total Budget */}
            <div className="p-5 m-5 w-80 rounded-md bg-gray-300">
                Budget: {currency}
                <input
                type="number" 
                className="border border-black p-1 ml-1"
                name="budget"
                value={budget}
                onChange={handleBudget}
                />
            </div>
            {/* Remaining Budget */}
            <div className="p-5 m-5 w-80 rounded-md bg-green-100">
                Remaining: {currency} {remaining}
            </div>
            {/* Budget Spent */}
            <div className="p-5 m-5 w-80 rounded-md bg-blue-300">
                Spent so far: {currency} {spent}
            </div>
        </div>
    );
}

export default Budgetdisplay;