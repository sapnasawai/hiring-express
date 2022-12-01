import React, { useState, useEffect } from "react";
import "./style.css";
import List from "./components/List";
import Add from "./components/Add";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const App = () => {
   const [inputData, setInputData] = useState("");
  const [notes, setNotes] = useState(getLocalItems());
  const [toggleSubmit, setoggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {

    if (!inputData) {
      alert("Please fill the data");
    } else if (inputData && !toggleSubmit) {
      setNotes(
        notes.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setoggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setNotes([...notes, allInputData]);
      setInputData("");
    }
  };

  const editItem = (index) => {
    let newEditItem = notes.find((elem) => {
      return elem.id === index;
    });
    console.log(newEditItem);
    setoggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(index);
  };

  const deleteItem = (index) => {
    const updatedItems = notes.filter((elem) => {
      return index !== elem.id;
    });
    setNotes(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Take Your Notes</h1>
          <List notes={notes} editItem={editItem} deleteItem={deleteItem} />
          <Add inputData={inputData} addItem={addItem} toggleSubmit={toggleSubmit} setInputData={setInputData}/>
        </div>
      </div>
    </>
  );
};

export default App;
