import React from "react";
import { StateTask } from "../constant/enum/state-task"
import { InputText } from "./InputText"
interface ITaskArgument {
  id?: string | number | undefined,
  title?: string | undefined,
  state: StateTask | undefined
}

export interface ITaskComponent {
  onArchiveTask: any,
  onPinnedTask: any,
  task: ITaskArgument
}
export const Task = ({
  task: {
    id,
    title,
    state
  },
  onPinnedTask,
  onArchiveTask
}: ITaskComponent) => {
  return (
    <div className="list-item">
      <div className={`list-item ${state}`}>
        <label
          htmlFor="checked"
          aria-label={`archiveTask-${id}`}
          className="checkbox"
        >
          <input
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === StateTask.TASK_ARCHIVED}
          />
          <span
            className="checkbox-custom"
            onClick={() => onArchiveTask(id)}
          />
        </label>

        <label htmlFor="title" aria-label={title} className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            name="title"
            placeholder="Input title"
          />
        </label>

        {state !== StateTask.TASK_ARCHIVED && (
          <button
            className="pin-button"
            onClick={() => onPinnedTask(id)}
            id={`pinTask-${id}`}
            aria-label={`pinTask-${id}`}
            key={`pinTask-${id}`}
          >
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    </div>
  )
}