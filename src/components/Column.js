import React from "react";
import styled from "styled-components";
import Task from "./Task";

import { Droppable } from "react-beautiful-dnd";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default function Column({ column, tasks }) {
  const listOfTasks = tasks.map((currentTask,index) => {
    return <Task key={currentTask.id} task={currentTask} index={index}/>;
  });
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => {
            return <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
                {listOfTasks}
                {provided.placeholder}
            </TaskList>
        }}
      </Droppable>
    </Container>
  );
}
