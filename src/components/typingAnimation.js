import { useState, useEffect } from "react";
import "../styles/components/_typingAnimation.scss";

const TypeWriter = ({ content = "", speed = 1000 }) => {
	const [displayedContent, setDisplayedContent] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const animKey = setInterval(() => {
			setIndex((index) => {
				if (index >= content.length - 1) {
					clearInterval(animKey);
					return index;
				}
				return index + 1;
			});
		}, speed);
	}, []);

	useEffect(() => {
		setDisplayedContent(
			(displayedContent) => displayedContent + content[index]
		);
	}, [index]);
	return <span className="type-writer">{displayedContent}</span>;
};

const sample_content = `Nikolina`;

const TypingAnimation = () => (
	<TypeWriter content={sample_content} speed={150} />
);

export default TypingAnimation;
