const defaultState = {
    inputValue: '',
    list: ['123']
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.target;
        return newState;
    }
    if(action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    // if(action.type === 'delete_item') {
    //     const newState = JSON.parse(JSON.stringify(state));
    //     newState.list.re
    // }
    return state;
}