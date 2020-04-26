import React, { useContext } from "react";
import Column from "./Column";
import DrgDrpContext from "./Providers/DragDropProvider";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  const { state, onDragEnd } = useContext(DrgDrpContext);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {state.columnsOrder.map((columnId, index) => {
          const column = state.columns[columnId];
          const isEditing = column.isEditing;
          const task = column.tasksOrder.map((taskId) => state.tasks[taskId]);
          return (
            <Column
              key={column.id}
              tasks={task}
              index={index}
              column={column}
              isEditing={isEditing}
            />
          );
        })}
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
