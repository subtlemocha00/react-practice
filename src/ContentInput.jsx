import { useRef } from "react";
import PropTypes from "prop-types";

export const ContentInput = ({ onContentSubmit }) => {
	const inputRef = useRef(null);
	const handleContentSubmit = () => {
		if (inputRef.current) {
			onContentSubmit(inputRef.current.value);
			inputRef.current.value = "";
			inputRef.current.focus();
		}
	};

	return (
		<form className="form-group">
			<label htmlFor="inputElement" className="sr-only">
				Content
			</label>
			<textarea
				ref={inputRef}
				id="inputElement"
				placeholder="content here..."
				autoFocus
				className="card my-3"
			></textarea>
			<button
				onClick={handleContentSubmit}
				type="button"
				className="btn btn-success"
			>
				Submit
			</button>
		</form>
	);
};

ContentInput.protoTypes = {
	onContentSubmit: PropTypes.func.isRequired,
};
