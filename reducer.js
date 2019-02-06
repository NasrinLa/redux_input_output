import {SET_NAME , SET_LASTNAME} from './type' 


const initialState = {
    name : '',
    lastname : '',
    id : 0
}

 function reducer( state =  initialState , action){
    switch( action.type ) {
        case SET_NAME:
            return{
                ...state,
                 name : action.payload ,
                
                
            };
        case SET_LASTNAME:
            return{
                ...state,
                lastname : action.payload
            };
        default :
            return state;
    }

}
export default reducer