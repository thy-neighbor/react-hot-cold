//actions

export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guess =>({
    type:SET_GUESSES,
    guess
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback =>({
    type:SET_FEEDBACK,
    feedback
});

export const SET_AURALSTATUS = 'SET_AURALSTATUS';
export const setAuralStatus = auralStatus =>({
    type:SET_AURALSTATUS,
    auralStatus
});

export const SET_RESTART = 'SET_RESTART';
export const setRestart = () =>({
    type:SET_RESTART,
});
