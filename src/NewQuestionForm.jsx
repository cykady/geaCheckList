import { useState, useContext } from 'react';
import {checkListContext} from './CheckListConextPorvider';

export default function NewQuestionForm({subId, hideForm }) {
    const { dispatch } = useContext(checkListContext);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "add", question: question, answer: answer, subId: subId});
        setQuestion("");
        setAnswer("");
        hideForm()
    }
    const handleChange = (e) => {
        if(e.target.placeholder === "Question"){
            setQuestion(e.target.value);
        } else {
            setAnswer(e.target.value);
        }
    }

    return (
        <form className='new-question-form'>
            <input 
            type="text" 
            placeholder="Question" 
            value={question} 
            onChange={handleChange}
            />
            <input 
            type="text" 
            placeholder="Answer" 
            value={answer} 
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}