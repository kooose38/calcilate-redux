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

   const items = [
      { id: "0", fn: onNumberClick },
      { id: "AC", fn: onClearClick },
      { id: "=", fn: onEqaulClick },
   ]

   const callurates = [
      { id: "+", fn: onPlusClick },
      { id: "-", fn: onMinusClick },
      { id: "x", fn: onMultiplyClick },
      { id: "/", fn: onDivideClick },
   ]

   const handleClick = useCallback((e) => {
      onNumberClick(e);
   }, [onNumberClick])

   return (
      <>
         <pre>{JSON.stringify(number, null, 4)}</pre>
         <div className="result">
            <Result result={resultText} />
         </div>
         <div className="button-wrapper">
            <div className="number">
               <div className="upper">
                  {TopNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => handleClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}
               </div>
               <div className="middle">
                  {centerNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => handleClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}

               </div>
               <div className="lower">
                  {bottomNumbers.map(top => (
                     <React.Fragment key={top}>
                        <Button text={top} onClick={() => handleClick(parseInt(top, 10))} />
                     </React.Fragment>
                  ))}
               </div>
               <div className="bottom">
                  {items.map(item => (
                     <React.Fragment key={item.id}>
                        {item.id === "0" ? (
                           <Button text={item.id} onClick={() => item.fn(parseInt(item.id))} />

                        ) : (
                              <Button text={item.id} onClick={() => item.fn()} />

                           )}
                     </React.Fragment>
                  ))}
               </div>
            </div>
            <div className="operator">
               {callurates.map(item => (
                  <React.Fragment key={item.id}>
                     <Button text={item.id} onClick={() => item.fn()} />
                  </React.Fragment>
               ))}
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