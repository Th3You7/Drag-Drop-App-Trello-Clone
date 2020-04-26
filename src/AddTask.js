import React, { useContext } from "react";
import Form from "./Form";
import styled from "styled-components";
import DrgDrpContext from "./Providers/DragDropProvider";

const Wrapper = styled.div`
  border-radius: 2px;
  background-color: inherit;
  opacity: 0.4;
  padding: 8px;
  margin-bottom: 6px;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
      <Wrapper onClick={() => handleEditing(columnId)}>+ Add Task</Wrapper>
    );
  }
};

export default AddTask;
