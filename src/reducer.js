import { useScrollTrigger } from "@material-ui/core"

//to push data to data layer
export const initialState={
    basket: [],
    loggedinuser:null
}

export const reducer=(state,action)=>{
       console.log(action)
  switch(action.type){
        case 'ADD_TO_BASKET':
            return {...state,basket:[...state.basket,action.item]}
        case 'LOGIN_USER':
            return{...state,loggedinuser:action.user}
        case 'REMOVE_FROM_BASKET':
               let newCart=[...state.basket]
               const index=state.basket.findIndex(item=>item.id==action.id)
                if(index>=0){
                    newCart.splice(index,1)
                }else
                    console.log('valami hiba...')
            return{...state, basket:newCart }
  }  
} 