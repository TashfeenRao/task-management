import Task from "./Task";
import { useTaskContext } from "./TaskContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ groupId }) => {
  const { tasks, completeTask, deleteTask } = useTaskContext();

  return (
    <DragDropContext>
      <Droppable droppableId='tasks'>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks &&
              tasks
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
