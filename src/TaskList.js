import { useState } from "react";
import Task from "./Task";
import { useTaskContext } from "./TaskContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ groupId }) => {
  const { tasks, completeTask, deleteTask } = useTaskContext();
  const [characters, updateCharacters] = useState(tasks);

  const handleOnDragEnd = (result) => {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='tasks'>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {characters &&
              characters
                .filter((task) => task.groupId === groupId)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}>
                        <Task
                          task={task}
                          completeTask={completeTask}
                          deleteTask={deleteTask}
                          groupId={groupId}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
