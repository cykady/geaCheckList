import {checkListContext} from './CheckListConextPorvider';
import checkMark from './assets/check-mark.svg';

import {useContext} from 'react';

export default function ChecklistContainer() {
    const {state, dispatch} = useContext(checkListContext);
    const containerElemnt = state.map(subject => {
        return(
        <div key={subject.subId} className='check-list-container'>
            <div className="container-header">
                <h4>{subject.header}</h4>
            </div>
            <ul className="container-body">
                {subject.questions.map(question => {
                    return(
                    <li 
                    key={question.queId}
                    onClick={() => dispatch({type: "check", subId: subject.subId, queId: question.queId})}
                    >
                        <p>{question.question}</p>
                        {question.checked && <img src={checkMark} className='check-mark-svg' alt="check mark"/>}
                        <p>{question.answer}</p>
                    </li>
                    )
                })}
            </ul>
        </div>
        )
    });
    return (
        <>
            {containerElemnt}
            <p className='author'>@Marcin Król</p>
        </>
    )
}