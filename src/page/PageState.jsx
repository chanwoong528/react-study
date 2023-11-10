import React, { useEffect, useState } from "react";
import LayoutPage from "../LayoutPage";

const PageState = () => {
  console.log("Page init");

  console.log("State before: ");
  const [state, setState] = useState(0);
  console.log("State after: ");

  const onAsyncClickButton = () => {
    console.log("inner onAsyncClickButton before: ");
    setState(state + 1);
    console.log("state [1st] after : ", state);
    setState(state + 1);
    console.log("state [2nd] after : ", state);
    setState(state + 1);
    console.log("state [3rd] after : ", state);
    //call 3 times, but because of batch update once
    console.log("inner onAsyncClickButton after: ");
    //만약 컴포넌트가 언마운트되기 전이나, 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해주어야 한다.
  };

  const onSyncClickButton = () => {
    console.log("inner onSyncClickButton before: ");
    setState((state) => state + 1);
    console.log("state [1st] after : ", state);
    setState((state) => state + 1);
    console.log("state [2nd] after : ", state);
    setState((state) => state + 1);
    console.log("state [3rd] after : ", state);
    //이렇게 되면, 여러번 전달받는 함수들은 큐에 저장되어 순서대로 실행된다. 따라서 큐에서 먼저 수행된 함수의 결과로 반영된 state값이 다음 수행할 함수의 인자로 들어가게 되므로, 항상 최신의 state를 유지하게 된다.
    console.log("inner onSyncClickButton after: ");
  };

  const onTimeoutClickButton = () => {
    console.log("inner onSyncClickButton before: ");
    setTimeout(() => {
      setState(state + 1);
    }, 5000);
    console.log("state [1st] after : ", state);
    setTimeout(() => {
      setState(state + 1);
    }, 6000);
    console.log("state [2nd] after : ", state);
    setTimeout(() => {
      setState(state + 1);
    }, 7000);
    console.log("state [3rd] after : ", state);
    //이렇게 되면, 여러번 전달받는 함수들은 큐에 저장되어 순서대로 실행된다. 따라서 큐에서 먼저 수행된 함수의 결과로 반영된 state값이 다음 수행할 함수의 인자로 들어가게 되므로, 항상 최신의 state를 유지하게 된다.
    console.log("inner onSyncClickButton after: ");
  };

  return (
    <LayoutPage title="use state">
      <div>
        <h2>1. useState - study</h2>
        <p>state result = {state}</p>
        <button onClick={() => onAsyncClickButton()}>
          setState(state + 1);
          <br />
          +3
        </button>
        <button onClick={() => onSyncClickButton()}>
          setState((state) {"=>"} state + 1);
          <br />
          +3
        </button>
        <button onClick={() => onTimeoutClickButton()}>
          timeout setState(state+1);
          <br />
          +3
        </button>
        <p>
          <strong>
            Why setState is async ?<br />
          </strong>
          하나의 페이지나 컴포넌트 내에도 수많은 상태값이 존재한다. 만약 이 상태
          하나하나가 바뀔 때마다 화면을 리렌더링 한다면 문제가 생길수도 있다.
          때문에 리액트는 성능의 향상을 위해서 setState를 연속 호출하면 배치
          처리하여 한 번에 렌더링하도록 하였다. 아무리 많은 setState가
          연속적으로 사용되었어도 배치 처리에 의해서 한 번의 렌더링으로 최신
          상태를 유지하는 것이다.
          <br />
          <em>PS</em>
          <br />
          아무리 많은 setState가 연속적으로 사용되었어도 배치 처리에 의해서 한
          번의 렌더링으로 최신 상태를 유지하는 것이다. <br />
          전달된 setState를 하나로 병합한 후 최종적으로 한번의 setState를 하게
          된다는 얘기다.
        </p>
        <br />
        <p>
          <strong> 배치란? (batch)</strong>
          <br />
          배치란 React가 너 나은 성능을 위해 여러개의 state 업데이트를 하나의
          리렌더링으로 묶는 것을 의미한다. React는 16ms 동안 변경된 상태 값들을
          하나로 묶는다. (16ms 단위로 배치를 진행한다.)
          <br />
          <em>
            PS
            <br />
            여러개의 state 업데이트를 {"->"} 한번에 리렌더링 (16ms)
          </em>
        </p>
        <br />
        <pre>
          example: for useState batch {"->"}
          <br />
          <code>
            &lt;script&gt;
            <br />
            {`(function () {
              let obj = Object.assign(
                {}, //target
                { a: 1, b: 2 }, //src overwrite target
                { a: 1, b: 2 }, //src overwrite target
                { a: 1, b: 2 } //src overwrite target
              );
              //basic idea of how "setState(state+1)" works
            })()`}
            <br />
            &lt;/script&gt;
          </code>
        </pre>
      </div>
    </LayoutPage>
  );
};

export default PageState;
