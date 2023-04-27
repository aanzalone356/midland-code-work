import React, {useEffect, useState, useRef} from 'react';
import Container from './Styled/Container.js';
import Button from './Styled/Button.js';
import Input from './Styled/Input.js';
import Text from './Styled/Text.js';

export const TaskDisplay = (users, setUser) => {
  const newestTask = useRef(null);
  const [newTask, setNewTask] = useState('');
  const [Tasks, setTodo] =  useState([
    {id: 1, task: 'First Task', completed: false},
    {id: 2, task: 'Second Task', completed: false},
    {id: 3, task: 'Third Task', completed: true},
    {id: 4, task: 'Four Task', completed: true},
    {id: 5, task: 'Fifth Task', completed: false},
  ]);

  //------------------------------------------------------------------------------------------------------------//
  const addTask = (task) => {
    document.getElementById('taskText').value = '';
    let newTasks = [...Tasks, {id: Tasks.length + 1, task: task, completed: false}]; //Enter values in todos
    setTodo(newTasks);
    newestTask.current = task;
    console.log(Tasks);
  }
  useEffect(() => {
    console.log(`most recent task: `, newestTask.current);
  }, [newestTask]);


  const removeTask = (task) => {
    const newTasks = Tasks.filter((t) => t.id !== task.id);
    setTodo(newTasks);
    console.log(`removed ${task.id}`);
    console.log(newTasks);
  }
  useEffect(() => {
    console.log(Tasks);
    for(let i=0;i<Tasks.length;i++){
      let singleTask = Tasks[i];
      singleTask.id = i+1;
      console.log(singleTask);
    }
  },[Tasks]);


  const handleTaskText = (inputText) => {
    setNewTask(inputText);
  }
  useEffect(() => {},[newTask])

//------------------------------------------------------------------------------------------------------------//
  return (
    <Container moveleft task >
      {newestTask && (
        <div>
          <h3>Most Recently Added Task: {newestTask.current}</h3>
        </div>
      )}
      {Tasks.map((task, index) => {
        return (
          <div key={index}>
            <Text>{task.id}: {task.task}</Text>
            <Button id='taskComplete' onClick={(e) => removeTask(task)}>Remove Task</Button>
          </div>
        )
      })}
      <Input bottom id='taskText' placeholder='New Task' onChange={(e) => handleTaskText(e.target.value)}></Input>
      <Text>Word Count: {newTask.length}</Text>
      <Button onClick={(e) => addTask(newTask)}>Add Task</Button>
    </Container>
  )
}
