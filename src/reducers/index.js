import { combineReducers } from 'redux'


const mainReducer = (state={}, action) => {
  console.log('reducer executing with action:', action)
  if(action.type === 'CHANGE_MAIN_COMPONENT')
    return {mainComponent: action.value}
  console.log('reducer fucked up')
  return state
}

export default combineReducers({
  mainReducer
})
