import React, { Component, useCallback } from 'react'
import { connect } from "react-redux";
import { Button, Result } from './components/'
import { onClearClick, onDivideClick, onEqaulClick, onMinusClick, onMultiplyClick, onNumberClick, onPlusClick } from './redux/number/actions';

const App = (props) => {
   const {
      onNumberClick,
      onPlusClick,
      onMinusClick,
      onMultiplyClick,
      onDivideClick,
      onEqaulClick,
      onClearClick,
      number,
   } = props;


   const resultText = number.showingResult ? number.resultValue : number.inputValue;

   const TopNumbers = ["7", "8", "9"];
   const centerNumbers = ["4", "5", "6"];
   const bottomNumbers = ["1", "2", "3"];

   return (
      <>
         <div className="result">
            <Result result={resultText} />
         </div>
         <div className="button-wrapper">
            <div className="number">
               <div className="upper">
                  {TopNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => onNumberClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}
               </div>
               <div className="middle">
                  {centerNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => onNumberClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}

               </div>
               <div className="lower">
                  {bottomNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => onNumberClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}
               </div>
               <div className="bottom">
                  <Button text={"0"} onClick={() => onClearClick(0)} />
                  <Button text={"AC"} onClick={() => onClearClick()} />
                  <Button text={"="} onClick={() => onEqaulClick()} />
               </div>
            </div>
            <div className="operator">
               <Button text={"+"} onClick={() => onPlusClick()} />
               <Button text={"-"} onClick={() => onMinusClick()} />
               <Button text={"x"} onClick={() => onMultiplyClick()} />
               <Button text={"/"} onClick={() => onDivideClick()} />
            </div>
         </div>
      </>
   );
};

const mapStateToProps = (state) => {
   return {
      number: state.number,
   }
};

const mapDispatchProps = {
   onNumberClick,
   onPlusClick,
   onMinusClick,
   onMultiplyClick,
   onDivideClick,
   onEqaulClick,
   onClearClick,

}

export default connect(mapStateToProps, mapDispatchProps)(App);