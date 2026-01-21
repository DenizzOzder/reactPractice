import React from "react";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <>
      <div>Page1</div>
      <div>
        <ul>
          <li>
            <Link to="/about">Page2</Link>
          </li>
          <li>
            <Link to="/contact">Page3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
