
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
        case 'PLUS_ONE':
            let plusCart=[...state.basket]
            const plusIndex=state.basket.findIndex(item=>item.id==action.id)
            plusCart.splice(plusIndex,1)
            plusCart.push(action.item)
            return{...state, basket:plusCart }
        case 'MINUS_ONE':
            let minusCart=[...state.basket]
            const minusIndex=state.basket.findIndex(item=>item.id==action.id)
            if(action.item.quantity>0){
                 minusCart.splice(minusIndex,1)
                 minusCart.push(action.item)
            }  
            return{...state, basket:minusCart }
        case 'MODIFY_QUANTITY':
            let mCart=[...state.basket]
            mCart.forEach(e=>{
                if(e.id==action.id)
                    e.quantity=action.qty+1
            })
            return{...state, basket:mCart }
  }  
} 