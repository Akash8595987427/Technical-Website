// It is important that reducer function must return something 

const reducer = (state, action)=>{


    switch(action.type){

        case "GET_LOADING" :
            return{
                ...state,
                isLoading : true
            }

        case "GET_API" : 
        return {
            ...state,
            hits : action.payload.hits_data,
            page : action.payload.page_data,
            isLoading : false
        };
    }

    return state;

}


export default reducer;