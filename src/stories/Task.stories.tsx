import React from "react";
import { Task } from "./Task";
import { StateTask } from "../constant/enum/state-task";
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title: 'Example/Task',
    component: Task
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = args => <Task {...args} />

export const Default = Template.bind({});
Default.args = {
    task: {
        id: 1,
        title: "Test Task",
        state: StateTask.TASK_INBOX
    }
}
export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: StateTask.TASK_PINNED
    }
}
export const Archived = Template.bind({});
Archived.args = {
    task:{
        ...Default.args.task,
        state:StateTask.TASK_ARCHIVED   
    }
}

