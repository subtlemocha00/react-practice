export default function TextDisplay({ input, elementType }) {
	if (elementType === "h1") {
		return <h1>{input}'s Webpage</h1>;
	}
}
