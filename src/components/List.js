import React from 'react';
import { BsTrash } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";

const List = ({notes,editItem, deleteItem}) => {
   
  return (
    <div>
          <div className="container list-box"><h4>All Notes</h4>
            {notes.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  
                  <p>{elem.name}</p>
                  <div className="icon">
                    <GrEdit
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    />
                    <BsTrash
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    />
                  </div>
                </div>
              );
            })}
            
          </div>
    </div>
  )
}

export default List