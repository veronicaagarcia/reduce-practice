export const initialStateReduce = []

export const reducerCart = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':{
      const { id } = payload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state, {
          ...payload, quantity: 1
        }]
    }
    case 'REMOVE_FROM_CART':{
      const { id } = payload
      return state.filter(item => item.id !== id)
    }
    case 'CLEART_CART':{
      return initialStateReduce
    }
  }
  return state
}
