import React, { useState, useCallback } from "react";
import Counte from "./Counte";
import Button from "./Button";
import Title from "./Title";
function ParentComp() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Counte text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Counte text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComp;
