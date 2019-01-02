import {SET_GUESSES,SET_AURALSTATUS,SET_FEEDBACK,SET_RESTART} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
  };

export const gameReducer = (state=initialState, action) => {
    if(action.type === SET_GUESSES){
        return Object.assign({},state,{
            guesses:[...state.guesses, action.guess]
        });
    }else if(action.type === SET_FEEDBACK){
        return Object.assign({},state,{
            feedback:action.feedback
        });
    }else if(action.type === SET_AURALSTATUS){
        return Object.assign({},state,{
            auralStatus:action.auralStatus
        });
    }else if(action.type === SET_RESTART){
        const {guesses,feedback,auralStatus,correctAnswer}=initialState;
        return Object.assign({},state,{
            guesses,feedback,auralStatus,correctAnswer
        });
    }

    return state;
}