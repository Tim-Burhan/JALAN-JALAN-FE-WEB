const initialState = {
  onAuth: false,
  token: null,
  errMsg: '',
  sccMsg: '',
}

const auth = (state= initialState, action) =>{
  switch(action.type){
    case 'AUTH_TOGGLE' :{
      return{
        ...state,
        onAuth : !state.onAuth
      }
    }
    case 'AUTH_TOGGLE_FALSE' :{
      return{
        ...state,
        onAuth : false
      }
    }
    case 'AUTH_LOGIN' :{
      return{
        ...state,
        token: action.payload.token,
        sccMsg: action.payload.message,
      }
    }
    case 'AUTH_LOGIN_FAILED' :{
      return{
        ...state,
        errMsg: action.payload
      }
    }
    case 'RESET_MESSAGE' :{
      return{
        ...state,
        sccMsg: "",
        errMsg: ""
      }
    }
    case 'AUTH_REGISTER' :{
      return{
        ...state,
        sccMsg: action.payload
      }
    }
    case 'AUTH_REGISTER_FAILED' :{
      return{
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_LOGOUT' :{
      return{
        ...state,
        token: null
      }
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default auth

