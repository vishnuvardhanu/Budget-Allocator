import React from "react";

function UpdateAllocation(){
    return(
        <div className="w-fit p-5 m-3 flex">
            <div className="">
                Department: 
                <select name="dept">
                    <option value="market" selected>Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="sales">Sales</option>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                </select>
            </div>
        </div>
    );
}

export default UpdateAllocation;