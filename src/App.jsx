import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGE_LIST } from "./constant/CONSTANT";

function App() {
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
