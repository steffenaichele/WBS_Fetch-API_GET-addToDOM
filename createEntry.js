const createEntry = (data, gen) => {
	const entry = document.createElement("li");

	const entryImage = document.createElement("img");
	entryImage.src = data.sprites.front_default;
	entryImage.alt = data.name;
	entry.appendChild(entryImage);

	const parent = document
		.getElementsByTagName("section")
		[gen].getElementsByTagName("ul")[0];
	parent.appendChild(entry);
};

export default createEntry;
