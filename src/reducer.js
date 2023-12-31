import * as actions from './actionTypes';// []

let lastId = 0;
// reducer that takes the state along with current action
 export default function reducer(state = [], action) {
    if (action.type === 'BUG_ADDED')
    return [
        ...state,
        {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }
    ];
    else if (action.type === 'BUG_REMOVED')
    return state.filter(bug => bug.id !== action.payload.id)

    return state;
}