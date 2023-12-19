import "./App.css";
import { ContentInput } from "./ContentInput";
import InputComponent from "./InputComponent";
import Navbar from "./Navbar";
import SignInForm from "./SignInForm";
import TextDisplay from "./TextDisplay";
import { linkList } from "./linkList";
import { useEffect, useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState("Username");
	const [contentValueOne, setContentValueOne] = useState("");
	function onInputChange(input) {
		setInputValue(input);
	}
	function onContentSubmit(input) {
		const listElement = document.getElementById("contentList");
		setContentValueOne(input);
		const contentDiv = document.createElement("li");
		contentDiv.textContent = `${input}`;
		listElement.append(contentDiv);
	}
	return (
		<div className="m-3 p-2">
			<Navbar linkList={linkList} />
			<SignInForm />
			<div className="my-2 p-2 bg-light border border-dark">
				<TextDisplay elementType="h1" input={inputValue} />
				<InputComponent onInputChange={onInputChange} />
			</div>
			<div className="my-2 p-2 bg-light border border-dark">
				<ContentInput onContentSubmit={onContentSubmit} />
				<ul id="contentList"></ul>
			</div>
		</div>
	);
}

export default App;
