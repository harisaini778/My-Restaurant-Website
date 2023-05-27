import classes from "./Input.module.css";

const Input = (props) => {
    return <div className={classes.input}>
        <label className={classes["input label"]} htmlFor={props.input.id}>
         {props.label}   
        </label>
        <input className={classes["input input"] } id={props.input.id } {...props.input} />
</div>
};
export default Input