import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Todo = () => {
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    const addItem = () => {
        if (input) {
            setItems([...items, input])
            setInput("")
            return
        }
    }

    const deleteAll = () => {
        setItems([])
    }

    const deleteSingleItem = (index) => {
        const filteredData = items.filter((_, i) => index !== i)
        setItems(filteredData)
    }

    const editItem = (index) => {
        setInput(items[index])
        setIsEditing(true)
        setEditIndex(index)
    }

    const updateItem = () => {
        if (input && isEditing !== null) {
            const updatedItems = items.map((item, index) =>
                index === editIndex ? input : item
            )
            setItems(updatedItems)
            setInput("")
            setIsEditing(false)
            setEditIndex(null)
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-5 mb-4'>Todo App</h1>

            <input
                value={input}
                type="text"
                placeholder='Enter items..'
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            />
            {isEditing ? (
                <MdEdit onClick={updateItem} style={{ fontSize: 30, marginLeft: 5 }} />
            ) : (
                <IoIosAddCircle onClick={addItem} style={{ fontSize: 30, marginLeft: 5 }} />
            )}
            <MdDelete onClick={deleteAll} style={{ fontSize: 30, marginLeft: 5 }} />

            <ul>
                {items.map((element, index) => {
                    return (
                        <li key={index}>
                            {element}
                            <MdDelete onClick={() => deleteSingleItem(index)} style={{ cursor: 'pointer', marginLeft: 5 }} />
                            <MdEdit onClick={() => editItem(index)} style={{ cursor: 'pointer', marginLeft: 5 }} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo
