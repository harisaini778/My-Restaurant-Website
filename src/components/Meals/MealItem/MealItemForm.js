import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef,useState } from "react";
const MealItemForm = props => {
    
    const amountInputRef = useRef();
    
    const [amountIsValid, setAmountIsValid] =
        useState(true);
    
    const submitHandeler = event => {
        event.preventDefault();
        const refAmount = amountInputRef.current.value;
        const refAmountNumber = +refAmount;
        if (refAmountNumber.trim().length === 0 ||
            refAmountNumber < 1 ||
            refAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(refAmountNumber);
    };
    
    return <form className={classes.form} onSubmit={submitHandeler}>
        <Input ref={amountInputRef } label="Amount"
            input={{
                id: "Amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue:"1"
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1-5) </p>}
</form>
};
export default MealItemForm;