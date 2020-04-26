import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  border-radius: 2px;
  transition: background-color 0.1s ease;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  padding: 8px;
  margin-bottom: 6px;
`;

const Task = React.memo(({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Wrapper>
      )}
    </Draggable>
  );
});

export default Task;
