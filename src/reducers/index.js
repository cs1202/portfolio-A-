import { combineReducers } from 'redux'
import cookies from 'js-cookie'
import { contactName, contactEmail, contactPhone, contactMessage} from './contact'


const mainReducer = (state={}, action) => {
  console.log('reducer executing with action:', action)
  if(action.type === 'CHANGE_MAIN_COMPONENT'){
    cookies.set('main-component', action.value)
    return {mainComponent: action.value}
  }
  return state
}

export default combineReducers({
  mainReducer,
  contactName, contactEmail, contactPhone, contactMessage,
})
