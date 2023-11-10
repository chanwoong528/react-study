import React from "react";
import { PAGE_LIST } from "../constant/CONSTANT";
import { Link } from "react-router-dom";
import LayoutPage from "../LayoutPage";

const PageMain = () => {
  return (
    <LayoutPage title="Main">
      <nav>
        <ul>
          {PAGE_LIST.map((li) => {
            return (
              <li key={li.label}>
                <Link to={li.url}>{li.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </LayoutPage>
  );
};

export default PageMain;
