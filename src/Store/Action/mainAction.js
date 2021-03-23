import * as actionTypes from "../ActionTypes/mainActionType";

/**
 * Action function for saving data
 */

export const saveData = (payload, callBackConfirmation) => {
  return async (dispatch) => {
    if(payload){
      dispatch({
        type: actionTypes.DATA,
        payload: payload,
      })
      callBackConfirmation('success');
    }
  };
};

/**
 * Action function for canceling data
 */

 export const cancelData = (payload) => {
  return async (dispatch) => {
    if(payload){
      dispatch({
        type: actionTypes.CANCEL,
        payload: payload,
      })
    }
  };
};

