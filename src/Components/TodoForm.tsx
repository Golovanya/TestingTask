import React, { useState, useEffect } from 'react';
import { TextField } from '@consta/uikit/TextField';
import { DatePicker } from '@consta/uikit/DatePicker';
import { Button } from '@consta/uikit/Button';
import { Task } from '../types';

type TodoFormProps = {
  onSave: (task: Task) => void;
  taskToEdit: Task|null;
};

const TodoForm: React.FC<TodoFormProps> = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(new Date(taskToEdit.dueDate));
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (title && description && dueDate) {
      const task: Task = {
        id: taskToEdit ? taskToEdit.id : new Date().toISOString(),
        title,
        description,
        dueDate: dueDate.toISOString(),
      };
      onSave(task);
      setTitle('');
      setDescription('');
      setDueDate(null);
    }
  };

  return (
      <>
    <div className="form">
     
      <TextField
        placeholder="Заголовок"
        type="text"
        value={title}
        onChange={( value:string|null) => setTitle(value as string)}
      />
      <DatePicker value={dueDate} onChange={(value) => setDueDate(value)} />
      <Button label="Добавить" onClick={handleSave} />
    </div>
        <TextField
          placeholder="Описание"
          type="textarea"
          minRows={2}
          value={description}
          onChange={( value:string|null) => setDescription(value as string)}
        />
      </>
  );
};

export default TodoForm;
