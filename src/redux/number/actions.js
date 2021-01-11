import { CLEAR, DIVIDE, EQUAL, INPUT_NUMBER, MINUS, MULTIPLY, PLUS } from "./constans";

export const onNumberClick = (number) => {
   return (dispatch) => {
      dispatch({
         type: INPUT_NUMBER,
         payload:
            number

      })
   }
};
export const onPlusClick = () => {
   return (dispatch) => {
      dispatch({
         type: PLUS,
      })
   }
};
export const onMinusClick = () => {
   return (dispatch) => {
      dispatch({
         type: MINUS,
      })
   }
};
export const onMultiplyClick = () => {
   return (dispatch) => {
      dispatch({
         type: MULTIPLY,
      })
   }
};
export const onDivideClick = () => {
   return (dispatch) => {
      dispatch({
         type: DIVIDE,
      })
   }
};
export const onEqaulClick = () => {
   return (dispatch) => {
      dispatch({
         type: EQUAL,
      })
   }
};
export const onClearClick = () => {
   return (dispatch) => {
      dispatch({
         type: CLEAR,
      })
   }
};