import React from "react";

const LayoutPage = ({ title, children }) => {
  return (
    <main>
      <h2>{title}</h2>
      <div>{children}</div>
    </main>
  );
};

export default LayoutPage;
