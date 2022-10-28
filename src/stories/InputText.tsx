import React from "react";
import { Input } from "antd"
import './inputText.css'
interface IFormProps{
    size:'small'|'medium'|'large',
    backgroundColor?: string
}
export const InputText = ({
    size = 'medium',
    backgroundColor,
    ...props

}:IFormProps) =>{

    return(
        <Input
        className={`storybook-input--${size}`}
        style={{backgroundColor}}
        {...props}
        />
    )
}