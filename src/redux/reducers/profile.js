const initialState = {
  data: {},
  errMsg: "",
  details: {},
  sccMsg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "GET_PROFILE_FAILED": {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'UPDATE_PROFILE': {
      return {
        ...state,
        details: action.payload.user,
        sccMsg: action.payload.message
      } 
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
