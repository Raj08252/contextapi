import React from "react";
import { FirstName, LastName } from "./App";
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(Fname) => {
          return (
            <LastName.Consumer>
              {(Lname) => {
                return (
                  <h1 className="text-center">
                    My name is {Fname}
                    {Lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
