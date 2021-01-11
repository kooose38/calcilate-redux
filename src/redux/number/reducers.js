import initialState from "../store/initial";
import { CLEAR, DIVIDE, EQUAL, INPUT_NUMBER, MINUS, MULTIPLY, PLUS } from "./constans";

const numberReducer = (state = initialState, action) => {
   switch (action.type) {
      case INPUT_NUMBER:
         return {
            ...state,
            inputValue: state.inputValue * 10 + action.payload,
            showingResult: false,
         }
      case PLUS:
         //演算が一度でも押されたかどうか？
         if (state.calculate === true) {
            return {
               ...state,
               inputValue: 0,
               operator: "+",
               resultValue: state.resultValue + state.inputValue,
               showingResult: true
            }
         } else {
            return {
               ...state,
               inputValue: 0,
               operator: "+",
               calculate: true,
               resultValue: state.inputValue,
               showingResult: true
            }
         }
      case MINUS:
         if (state.calculate === true) {
            return {
               ...state,
               inputValue: 0,
               operator: "-",
               resultValue: state.resultValue - state.inputValue,
               showingResult: true
            }
         } else {
            return {
               ...state,
               inputValue: 0,
               operator: "-",
               calculate: true,
               resultValue: state.inputValue,
               showingResult: true
            }
         }
      case MULTIPLY:
         if (state.calculate === true) {
            return {
               ...state,
               inputValue: 0,
               operator: "*",
               resultValue: state.resultValue * state.inputValue,
               showingResult: true
            }
         } else {
            return {
               ...state,
               inputValue: 0,
               operator: "*",
               calculate: true,
               resultValue: state.inputValue,
               showingResult: true
            }
         }
      case DIVIDE:
         if (state.calculate === true) {
            return {
               ...state,
               inputValue: 0,
               operator: "/",
               resultValue: state.resultValue / state.inputValue,
               showingResult: true
            }
         } else {
            return {
               ...state,
               inputValue: 0,
               operator: "/",
               calculate: true,
               resultValue: state.inputValue,
               showingResult: true
            }
         }

      case CLEAR:
         return {
            ...state,
            inputValue: 0,
            operator: "",
            calculate: false,
            resultValue: 0,
            showingResult: false,
         }

      case EQUAL:
         switch (state.operator) {
            case "+":
               return {
                  ...state,
                  inputValue: state.resultValue + state.inputValue,
                  operator: "",
                  calculate: false,
                  resultValue: state.resultValue + state.inputValue,
                  showingResult: true
               }
            case "-":
               return {
                  ...state,
                  inputValue: state.resultValue - state.inputValue,
                  operator: "",
                  calculate: false,
                  resultValue: state.resultValue - state.inputValue,
                  showingResult: true
               }
            case "*":
               return {
                  ...state,
                  inputValue: state.resultValue * state.inputValue,
                  operator: "",
                  calculate: false,
                  resultValue: state.resultValue * state.inputValue,
                  showingResult: true
               }
            case "/":
               return {
                  ...state,
                  inputValue: state.resultValue / state.inputValue,
                  operator: "",
                  calculate: false,
                  resultValue: state.resultValue / state.inputValue,
                  showingResult: true
               }
            default:
               return state;
         }
      default:
         return state;
   }
};

export default numberReducer;