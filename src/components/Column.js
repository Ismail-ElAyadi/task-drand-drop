import React from 'react'

import styled from 'styled-components'
import Task from './Task'
const Container = styled.div`
margin:8px;
border:1px solid lightgrey;
border-radius : 2px;
`;
const Title = styled.h3`
padding:8px;
`;
const TaskList = styled.div`
padding:8px;
`;

export default function Column({column, tasks}) {
    const listOfTasks = tasks.map(currentTask => {
        return <Task key={currentTask.id} task={currentTask} />
    })
    return (
        <Container>
            <Title>{column.title}</Title>
            <TaskList>{listOfTasks}</TaskList>

        </Container>
    )
}
