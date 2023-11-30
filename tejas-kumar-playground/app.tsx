const React = {
  createElement: (tag, props, ...children) => {
    //When you use the rest parameter (...args), it collects all the arguments passed to the function into a single array named args. This means that args inside the function will be an array containing all the arguments.
    let element = { tag, props: { ...props, children } };
    console.log(element)
    return element
  }
}


const a = <button className="123" data-id="aa" onclick={function () { console.log("click") }}>adasf
  <p>text</p>
  <p>text2</p>
</button>