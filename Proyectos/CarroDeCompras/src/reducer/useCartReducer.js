export const initialState = []
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id) // si no existe retorna -1

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload, // copia de producto
          quantity: 1 // inicializa la cantidad en 1
        }
      ]
    }

    case 'REST_ITEM_FROM_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity -= 1

        if (newState[productInCartIndex].quantity === 0) { // elminia los productos con cantidad 0
          return newState.filter(item => item.id !== id)
        }

        return newState
      }

      return state
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
      return initialState
    }

    default:
      return state
  }
}
