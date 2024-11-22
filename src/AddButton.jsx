import { MdOutlineAddCircleOutline } from "react-icons/md";
import NewQuestionForm from './NewQuestionForm';
import { useState } from 'react';

export default function AddButton({grid, subId}) {
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(!showForm);
    }
    return (
        <>
            <button style={{gridColumn: grid}}>
                <MdOutlineAddCircleOutline onClick={()=>handleClick()}/>
            </button>
            {showForm && <NewQuestionForm hideForm={handleClick} subId={subId}/>}
        </>
        
    )
}