// const reactWrap = document.getElementById("app");
// const root = ReactDOM.createRoot(reactWrap);

// root.render(React.createElement(App))


// function App() {



//   return (React.createElement('article', null,
//     React.createElement("p", null, "123"),
//     React.createElement("p", null, "123"),
//     React.createElement("p", null, "123")
//   ))
// }
const React = (function () {
  let _val;
  function useState(initVal) {
    const state = _val || initVal;
    const setState = newVal => {
      _val = newVal;
    }

    return [state, setState]
  }
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render }
})();


function Component() {
  const [count, setCount] = React.useState(1);

  return {
    render: () => console.log(count),
    click: () => setCount(2)
  }

}

var App = React.render(Component)
App.click();
// var App = React.render(Component)
App.render();


// console.log(count) //0 
// setCount(2)
// console.log(count) //0 -> count will be remained as count:0 when it was called " const [count, setCount] = useState(1); " above



// const a = <div>ABC</div>