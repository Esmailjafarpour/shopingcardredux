const initialState = {
     selectedItem : [],
     itemCounter : 0,
     total : 0,
     checkout : false
}

const sumItems = items => {

     const itemCounter = items.reduce((total ,product) => total + product.quantity , 0);
     const total = items.reduce((total ,product) => total + product.price * product.quantity , 0).toFixed(2);
     return {itemCounter , total}

}

const cartReducer = (state = initialState , action) => {

     switch (action.type) {

               case "ADD_ITEM":
                    if(!state.selectedItem.find(item => item.id === action.payload.id)){
                    state.selectedItem.push({
                         ...action.payload,
                         quantity : 1
                    })

                    }
                    //state.selectedItem => [{},{},{}] ===>> array of objects
                    //...state.selectedItem => {},{},{} ===>> objects
                    //[state.selectedItem] => [ [ {},{},{} ] ] ===>> array of array of objects
                    //[...state.selectedItem] => [ {},{},{} ]  ===>> array of objects
                    //selectedItem :  [...state.selectedItem] === selectedItem : state.selectedItem  ===>> array of objects
                    return{
                         ...state ,
                         selectedItem :  [...state.selectedItem],
                         ...sumItems(state.selectedItem),
                         checkout : false 
                    }
                         

               case "REMOVE_ITEM":
                    const newSelectedItem = state.selectedItem.filter(item => item.id  !== action.payload.id)
                    // newSelectedItem => [{},{},{}]
                    // ...newSelectedItem === {},{},{}
                    // [ ...newSelectedItem ] => [ {},{},{} ]
                    return{
                         ...state ,
                         selectedItem : [...newSelectedItem],
                         ...sumItems(newSelectedItem)
                    }
                        
                    

               case "INCREASE":
                    const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id)
                    state.selectedItem[indexI].quantity++;

                    return{
                         ...state,
                         ...sumItems(state.selectedItem)
                    }
                   

               case "DECREASE":
                    const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
                    state.selectedItem[indexD].quantity--
                    return{
                         ...state,
                         ...sumItems(state.selectedItem)
                    }

               case "CHECKOUT":
                    return{
                         selectedItem : [],
                         itemCounter : 0,
                         total : 0,
                         checkout : true  
                    }
                   

               case "CLEAR":
                    return{
                         selectedItem : [],
                         itemCounter : 0,
                         total : 0,
                         checkout : false  
                    }
     
          default: return state
               
     }
}


export default cartReducer;
