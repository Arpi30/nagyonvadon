import classes from "./formComponent.module.css";
export const TextArea = (props) => {
  return (
    <div className={classes.uzenet}>
      <label htmlFor={props.id}>{props.children}</label>
      <textarea
        id={props.id}
        onChange={props.onChange}
        className={classes.textarea}
        placeholder={props.placeholder}
        name={props.name}
        maxLength="500"></textarea>
    </div>
  );
};
