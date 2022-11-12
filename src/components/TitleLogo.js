import React from "react";

export default function TitleLogo() {
	const refresh = async () => window.location.reload();
	return (
		<div onClick={refresh}>
			<h1 className="title_logo">SPEECHIE FOR PREZ</h1>
		</div>
	);
}
