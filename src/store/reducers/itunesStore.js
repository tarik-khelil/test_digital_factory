import * as actionTypes from '../actions/actionsType';

const initialState = {
    itunes: [],
    totalItem: 0,
    myShoppingCar: []

}
const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const fetchItunesSuccess = (state, action) => {
    return updateObject(state, {
        itunes: action.data,
        totalItem: action.totalItem,

    });
}
const addSuccess = (state, action) => {
    return updateObject(state, {
        myShoppingCar: action.data,


    });
}
const removeSuccess = (state, action) => {
    return updateObject(state, {
        myShoppingCar: action.data,


    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITUNES: return fetchItunesSuccess(state, action);
        case actionTypes.ADD_TO_SHOOPING_CAR: return addSuccess(state, action);
        case actionTypes.REMOVE_FROM_MY_SHOOPING_CAR: return removeSuccess(state, action);
        default: return state


    }

}
export default reducer;