import React, { useContext, useRef } from "react";
import styled from "styled-components";
import DrgDrpContext from "./Providers/DragDropProvider";

const Wrapper = styled.div`
  display: block;
  border-radius: 2px;
  width: 244px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 2px;
  font-size: 1em;
  display: block;
  margin-bottom: 4px;
  width: 100%;
`;

const StyledBtn = styled.button`
  font-size: 0.8em;
  padding: 8px 14px;
  color: white;
  border: none;
  box-shadow: none;
  outline: none;
  border-radius: 2px;
  background-color: green;
  cursor: pointer;
`;

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);

  const handleAddClick = () => {
    endEditing(columnId);
    addData(columnId, newTask.value);
  };

  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder="Enter your task here..."
        ref={(val) => (newTask = val)}
        defaultValue=""
      />
      <StyledBtn onClick={handleAddClick}>Add Task</StyledBtn>
    </Wrapper>
  );
};

export default Form;
