import React, { useState } from "react";

export default function InputComponent({ onInputChange }) {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
		onInputChange(event.target.value); // Pass the value to the parent component or another component
	};

	return (
		<input type="text" placeholder="Username..." onChange={handleChange} />
	);
}
