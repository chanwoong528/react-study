import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE_LIST } from "./constant/CONSTANT";

function App() {
  const NoLanes = /*                        */ 0b0000000000000000000000000000000;
  console.log("!!!!!  ", NoLanes);
  return (
    <BrowserRouter>
      <Routes>
        {PAGE_LIST.map((page) => {
          return (
            <Route
              key={page.label}
              path={page.url}
              element={<page.pageComponent />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
