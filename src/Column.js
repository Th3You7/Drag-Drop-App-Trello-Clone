import React from "react";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin: 8px;
  color: #172b4d;
  background-color: #ebecf0;
  width: 260px;
  font-family: sans-serif;
  min-height: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
`;

const TaskList = styled.div`
  flex: 1 1 auto;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
`;

const Title = styled.h2`
  font-size: 0.9em;
`;

const Column = React.memo(({ tasks, column, isEditing }) => {
  return (
    <Wrapper>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <AllTasks tasks={tasks} />

            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddTask columnId={column.id} isEditing={isEditing} />
    </Wrapper>
  );
});

export default Column;
