import React from "react";
import { StateTask } from "../constant/enum/state-task"
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
    onArchiveTask }: ITaskComponent) => {
    return (
        <div className="list-item">
            <label htmlFor="title" aria-label={title}>
                <input type="text" value={title} readOnly={true} name="title" />
            </label>
        </div>
    )
}