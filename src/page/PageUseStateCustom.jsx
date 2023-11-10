// import React from "react";
// import LayoutPage from "../LayoutPage";

// const useStateCus = ((initVal) => {
//   let val;

//   if (val === undefined) {
//     //never been mutated
//     val = initVal;
//   }

//   const setState = (newVal) => {
//     val = newVal;
//     console.log(val);
//   };

//   return [val, setState];
// })();

// const PageUseStateCustom = () => {
//   const [state, setState] = useStateCus(0);
//   console.log(state);

//   const onClickPlus = () => {
//     setState(state + 1);
//   };

//   return (
//     <LayoutPage title="custom UseState">
//       <div>custom useState: {state}</div>
//       <button onClick={onClickPlus}>++</button>
//     </LayoutPage>
//   );
// };

// export default PageUseStateCustom;
