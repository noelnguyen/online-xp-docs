import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	theme: 'forest',
	startOnLoad: true
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
