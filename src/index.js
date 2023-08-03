import store from './store';

//state = reducer(state, action);
//notify the subscribers
const unsubscribe = store.subscribe(() => {
    console.log('Store Changed!', store.getState());
});

store.dispatch ({
    type: action.BUG_ADDED,
    payload: {
        description: 'Bug1'
    }
});
unsubscribe();

store.dispatch({
    type: action.BUG_REMOVED,
    payload: {
        description: 'Bug1'
    }
});
    

console.log(store.getState());
