import React, { useState } from 'react';
import TodoItem from '../Components/TodoItem';
import TodoForm from '../Components/TodoForm';
import { Task } from '../types';
import { useLocalStorage } from '../hooks/useLocalSorage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const TodoList: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const handleSave = (task: Task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleEdit = (task: Task) => {
    setTaskToEdit(task);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onSave={handleSave} taskToEdit={taskToEdit} />
      <TransitionGroup>
      {tasks.map(task => (
         <CSSTransition
         key={task.id}
         timeout={500}
         classNames="task"
       >
        <TodoItem key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
