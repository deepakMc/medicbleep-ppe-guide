const initialState = {
  responseData: {},
}

// Types
export const SAVE_DATA = 'saveData'

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, started: action.payload }
    default:
      return state
  }
}

// Action creators
export const saveResponseData = (response) => ({
  type: SAVE_DATA,
  payload: response,
})

// Selectors
export const response = (state) => state.Response.responseData
