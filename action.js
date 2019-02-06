import { SET_NAME , SET_LASTNAME } from "./type";
import {store} from '../page/App1'


const setNameAction = text => {
    return{
        type: SET_NAME ,
        payload: text

    };
};

const setLastnameAction = (text) => {
    return{
        type : SET_LASTNAME,
        payload : text
    }
}

export const  setName = text => {
    return store.dispatch(setNameAction(text));
} ;

export const  setLastname = text => {
    return store.dispatch(setLastnameAction(text));
} ;
