import React from 'react';

const Add = ({addItem, toggleSubmit, inputData, setInputData}) => {

 
  return (
    <div>
         <div className="container">
          <div className="input">
            <input
              type="text"
              placeholder="Add Notes"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            </div>
            <button id='btn' onClick={addItem}>{toggleSubmit ? "Add ":"Update"}</button>
            
          </div>
    </div>
  )
}

export default Add;