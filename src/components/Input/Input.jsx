import styles from "./input.module.css";

const Input = (props) => {
  const { label, type, validation, value, placeholder, onChangeFunction, name } =
    props;

  const inputClass = validation ? "" : styles.errorInput;
  return (
		<label>
			{label}
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChangeFunction(event.target.value)}
				className={inputClass}
				name={name} />
		</label>
	);
};

export default Input;