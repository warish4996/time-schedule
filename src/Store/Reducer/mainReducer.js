import * as actionTypes from "../ActionTypes/mainActionType";

/**
 * Reducer initial state
 */
const initialState = {
  data: [],
};

/**
 * Reducer function for admin product actions
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
    default:
      return state;
  }
};