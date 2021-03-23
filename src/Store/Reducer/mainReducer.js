import * as actionTypes from "../ActionTypes/mainActionType";

/**
 * Reducer initial state
 */
const initialState = {
  data: [],
};

/**
 * Reducer function for time Created or update actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const prevData = state.data
  switch (type) {
    case actionTypes.DATA:
      prevData.map((res,i)=>{
        if(res.time === payload.time){
          prevData.splice(i,1)
        } })
     return {
        ...state,
        data: [...prevData,payload],
      };
    case actionTypes.CANCEL:
      prevData.map((res,i)=>{
        if(res.time === payload){
          prevData.splice(i,1)
        } })
        return {
          ...state,
          data: [...prevData],
        };
    default:
      return state;
  }
};