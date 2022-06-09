import React, { useState } from 'react';
import './style.css'
import image from './todo.svg'

const Todo = () => {

    const [inputdata, SetInputData] = useState();
    const [items, SetItems] = useState([]);  

    const addItem = () => {
        if (!inputdata) {
            alert("Please enter data")
        }

        else {
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name:inputdata,
            }
            SetItems([...items, myNewInputData]);
            SetInputData("");
        }
    }

    const deleteItem = (index) => {

            const updatedItem = items.filter((curElement) => {
                return curElement.id !== index;
            });
            SetItems(updatedItem);
    }

    const removeAll = () => {
        SetItems([]);
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={image} alt='img' />
                        <figcaption>Add Your  List here</figcaption>
                    </figure>
                    <div className="addItems position-relative">
                        <input type="text" placeholder='Add Item' className='form-control' value={inputdata} onChange={(event) => SetInputData(event.target.value)} />
                        <i className="fa fa-plus add-btn position-absolute end-0 translate-middle-x translate-middle-y top-0 mt-4 me-3" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((curElement) => {
                                return (
                                    <div className="eachItem" key={curElement.id}>
                                        <h3>{curElement.name}</h3>
                                        <div className='todo-btn position-relative'>
                                            <i className="far fa-edit add-btn position-absolute end-0 translate-middle-x translate-middle-y top-0  my-auto me-5"></i>
                                            <i className="fa-solid fa-trash-alt  add-btn position-absolute end-0 translate-middle-x translate-middle-y top-0  my-auto" onClick={() => deleteItem(curElement.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn btn-warning effect04"  onClick={removeAll} >
                            <div>CHECK LIST</div>
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Todo;