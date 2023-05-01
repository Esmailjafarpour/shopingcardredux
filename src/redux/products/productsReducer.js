const initialState = {
     loading : false,
     products : [],
     errors : ""
}

const productsReducer = (state = initialState , action) => {

     switch (action.type) {
          case "FETCH_PRODUCTS_REQUEST":
              return{
                    ...state,
                    loading : true
              }
     
          case "FETCH_PRODUCTS_SUCCESS":
              return{
                    ...state,
                    loading : false,
                    products : action.payload,
              }
     
          case "FETCH_PRODUCTS_FAILURE":
              return{
                    ...state,
                    loading : false,
                    errors : action.payload,
              }
     
          default:
              return state
     }
}

export default productsReducer; 