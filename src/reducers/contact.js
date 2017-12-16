
export const contactName = (state={name: ''}, action) => {
  if(action.type === 'CONTACT_CHANGE_NAME')
    return {name: action.value}
  return state
}

export const contactEmail = (state={email: ''}, action) => {
  if(action.type === 'CONTACT_CHANGE_EMAIL')
    return {email: action.value}
  return state
}

export const contactPhone = (state={phone: ''}, action) => {
  if(action.type === 'CONTACT_CHANGE_PHONE')
    return {phone: action.value}
  return state
}

export const contactMessage = (state={message: ''}, action) => {
  if(action.type === 'CONTACT_CHANGE_MESSAGE')
    return {message: action.value}
  return state
}
