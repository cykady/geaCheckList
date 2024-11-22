import { createContext, useContext, useReducer } from 'react';
import ChecklistContainer from './ChecklistContainer';
import questions from './questions';

const checkListContext = createContext();
function checkReducer(state, action) {
    switch (action.type) {
        case "check":{
            return state.map(subject => {
                if(subject.subId === action.subId){
                    return {
                        ...subject,
                        questions: subject.questions.map(question => {
                            if(question.queId === action.queId){
                                return {
                                    ...question,
                                    checked: !question.checked
                                }
                            }
                            return question;
                        })
                    }
                }
                return subject;
            });
        }
        case "add":{
            const nextQuestionId = state.reduce((acc, subject) => {
                return acc + subject.questions.length;
            }
            , 0);
            return state.map(subject => {
                if(subject.subId === action.subId){
                    return {
                        ...subject,
                        questions: [
                            ...subject.questions,
                            {
                                queId: nextQuestionId,
                                question: action.question,
                                answer: action.answer,
                                checked: false
                            }
                        ]
                    }
                }
                return subject;
            });
        }
            
        default:
            return state;
    }
}
function CheckListConextPorvider() {
    const [state, dispatch] = useReducer(checkReducer, questions);
    return (
        <checkListContext.Provider value={{state, dispatch}}>
            <ChecklistContainer />
        </checkListContext.Provider>
    )
}
export {checkListContext, CheckListConextPorvider};