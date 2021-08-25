import { airLineData } from "../../dummy/airLineData";

const initialState = {
  data: airLineData,
  pagination: {},
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT":
      return {
        ...state,
        data: action.payload.items,
        pagination: action.payload.pageInfo,
      };
    default:
      return {
        ...state,
      };
  }
};

export default product;
