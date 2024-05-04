import React, { useState } from "react";

function Allocation({currency,setSpent,spent,remaining,setRemaining}){

    const[marketbudget,setMarketBudget] = useState(0);
    const[financebudget,setFinanceBudget] = useState(0);
    const[salesbudget,setSalesBudget] = useState(0);
    const[hrbudget,setHrBudget] = useState(0);
    const[itbudget,setItBudget] = useState(0);

    function handlemarketadd(){
        const val=marketbudget;
        if(remaining-10<0)
        {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        }
        else
        {
            setSpent(spent+10);
            setRemaining(remaining-10);
            setMarketBudget(val+10);
        }
        
    }
    function handlemarketsub(){
        const val=marketbudget;
        if(val-10<0)
        {
            setMarketBudget(0);
        }
        else
        {
            setMarketBudget(val-10);
            setSpent(spent-10);
            setRemaining(remaining+10);
        }
    }
    function handlefinanceadd(){
        const val=financebudget;
        if(remaining-10<0)
        {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        }
        else
        {
            setSpent(spent+10);
            setRemaining(remaining-10);
            setFinanceBudget(val+10);
        }
    }
    function handlefinancesub(){
        const val=financebudget;
        if(val-10<0)
        {
            setFinanceBudget(0);
        }
        else
        {
            setFinanceBudget(val-10);
            setSpent(spent-10);
            setRemaining(remaining+10);
        }
    }
    function handlesalesadd(){
        const val=salesbudget;
        if(remaining-10<0)
        {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        }
        else
        {
            setSpent(spent+10);
            setRemaining(remaining-10);
            setSalesBudget(val+10);
        }
    }
    function handlesalessub(){
        const val=salesbudget;
        if(val-10<0)
        {
            setSalesBudget(0);
        }
        else
        {
            setSalesBudget(val-10);
            setSpent(spent-10);
            setRemaining(remaining+10);
        }
    }
    function handlehradd(){
        const val=hrbudget;
        if(remaining-10<0)
        {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        }
        else
        {
            setSpent(spent+10);
            setRemaining(remaining-10);
            setHrBudget(val+10);
        }
    }
    function handlehrsub(){
        const val=hrbudget;
        if(val-10<0)
        {
            setHrBudget(0);
        }
        else
        {
            setHrBudget(val-10);
            setSpent(spent-10);
            setRemaining(remaining+10);
        }
    }
    function handleitadd(){
        const val=itbudget;
        if(remaining-10<0)
        {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        }
        else
        {
            setSpent(spent+10);
            setRemaining(remaining-10);
            setItBudget(val+10);
        }
    }
    function handleitsub(){
        const val=itbudget;
        if(val-10<0)
        {
            setItBudget(0);
        }
        else
        {
            setItBudget(val-10);
            setSpent(spent-10);
            setRemaining(remaining+10);
        }
    }
    return(
        /* Departments list */
        <div className=" m-6 w-fit text-base gird grid-rows-6">

            {/* Headings */}
            <div className="grid grid-cols-4 gap-x-48 font-bold border-b border-gray-300 p-3 text-xl"> 
                <div>Department</div>
                <div>Allocated Budget</div>
                <div>Increased by 10</div>
                <div>Decreased by 10</div>
            </div>

            {/* Marketing Department */}
            <div className="grid grid-cols-4 gap-x-48 p-3 border-b border-gray-300 text-xl">
                <p>Marketing</p>
                <p>{currency} {marketbudget}</p>
                <button className=" bg-green-500 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlemarketadd}
                >ADD</button>
                <button className=" bg-red-600 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlemarketsub}>Subtract</button>
            </div>

            {/* Finance Department */}
            <div className="grid grid-cols-4 gap-x-48 p-3 border-b border-gray-300 text-xl">
                <p>Finance</p>
                <p>{currency} {financebudget}</p>
                <button className=" bg-green-500 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlefinanceadd}
                >ADD</button>
                <button className=" bg-red-600 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlefinancesub}
                >Subtract</button>
            </div>

            {/* Sales Department */}
            <div className="grid grid-cols-4 gap-x-48 p-3 border-b border-gray-300 text-xl">
                <p>Sales</p>
                <p>{currency} {salesbudget}</p>
                <button className=" bg-green-500 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlesalesadd}>ADD</button>
                <button className=" bg-red-600 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlesalessub}
                >Subtract</button>
            </div>

            {/* Human Resource Department */}
            <div className="grid grid-cols-4 gap-x-48 p-3 border-b border-gray-300 text-xl">
                <p>Human Resource</p>
                <p>{currency} {hrbudget}</p>
                <button className=" bg-green-500 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlehradd}>ADD</button>
                <button className=" bg-red-600 p-1 font-bold text-white text-xl rounded-full"
                onClick={handlehrsub}>Subtract</button>
            </div>
            
            {/* It */}
            <div className="grid grid-cols-4 gap-x-48 p-3 border-b border-gray-300 text-xl">
                <p>IT</p>
                <p>{currency} {itbudget}</p>
                <button className=" bg-green-500 p-1 font-bold text-white text-xl rounded-full"
                onClick={handleitadd}>ADD</button>
                <button className=" bg-red-600 p-1 font-bold text-white text-xl rounded-full"
                onClick={handleitsub}>Subtract</button>
            </div>
        </div>

        
    );
}

export default Allocation;