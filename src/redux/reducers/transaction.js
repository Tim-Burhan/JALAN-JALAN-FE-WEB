const initialState = {
  sccMseg: '',
  errMseg : '',
  history: [],
}

const payment = (state= initialState, action) =>{
  switch(action.type){
    case 'CREATE_TRANSACTION' :{
      return{
        ...state,
        sccMseg: action.payload
      }
    }
    case 'CREATE_TRANSACTION_FAILED' :{
      return{
        ...state,
        errMseg: action.payload
      }
    }
    case 'GET_HISTORY_TRANSACTION' :{
      return{
        ...state,
        history: action.payload
      }
    }
    default: {
      return{
        ...state
      }
    }
  }
}

export default payment