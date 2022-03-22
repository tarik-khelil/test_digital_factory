

import axios from 'axios';
import * as actionsType from './actionsType'


const fetchItunsSuccess = (data, totalItem) => {
    return {
        type: actionsType.FETCH_ITUNES,
        data,
        totalItem
    }
}

const addSuccess = (data) => {
    return {
        type: actionsType.ADD_TO_SHOOPING_CAR,
        data,
    }
}
const removeSucces = (data) => {
    return {
        type: actionsType.REMOVE_FROM_MY_SHOOPING_CAR,
        data
    }
}

export const fetchItunes = (searchValue) => {
    return dispatch => {

        const url = `https://itunes.apple.com/search?term=${searchValue}`
        axios.get(url)
            .then(res => {
                dispatch(fetchItunsSuccess(res.data.results, res.data.resultCount))

            }).catch(err => {

            })
    }
}
export const addToMyShopppingCar = (data) => {
    return (dispatch, getState) => {

        const myShoppingCar = getState().IR.myShoppingCar;
        const tab = [...myShoppingCar, data]
        dispatch(addSuccess(tab))


    }

}
export const removeFromMyShoopungCar = (Id) => {
    return (dispatch, getState) => {
        const myShoppingCar = getState().IR.myShoppingCar;
        const tab = myShoppingCar.filter(item => item.artistId !== Id);
        dispatch(removeSucces(tab));

    }

}