import classes from "./Input.module.css";
import { forwardRef } from "react";
import React from "react";

const Input = forwardRef((props,ref) => {
    return <div className={classes.input}>
        <label className={classes["input label"]} htmlFor={props.input.id}>
         {props.label}   
        </label>
        <input ref={ref} className={classes["input input"] } id={props.input.id } {...props.input} />
</div>
});
export default Input