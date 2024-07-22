import React from "react";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import { Task } from "../types";
import { Text } from "@consta/uikit/Text";

type TodoItemProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <Card verticalSpace="m" horizontalSpace="m" className="card">
      <div className="card-header">
        <h3>{task.title}</h3>
        <Text view="secondary">{new Date(task.dueDate).toLocaleDateString()}</Text>
      </div>
      <Text size="s" lineHeight="m">{task.description}</Text>
      <div className="card-footer">
        <a href="#todoform"><Button label="Редактировать" onClick={() => onEdit(task)} /></a>
        <Button label="Удалить" onClick={() => onDelete(task.id)} />
      </div>
    </Card>
  );
};

export default TodoItem;
