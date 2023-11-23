const reactWrap = document.getElementById("app");
const root = ReactDOM.createRoot(reactWrap);

root.render(React.createElement(App))


function App() {
  return (React.createElement('article', null,
    React.createElement("p", null, "123"),
    React.createElement("p", null, "123"),
    React.createElement("p", null, "123")
  ))
}
