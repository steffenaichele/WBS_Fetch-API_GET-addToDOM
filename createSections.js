const createSections = (data) => {
	const newSection = document.createElement("section");
    newSection.id = data.name.replace(" ", "-").toLowerCase();
	newSection.classList.add(
		"w-[min(100%-4rem,_1600px)]",
		"mx-auto",
		"flex",
		"flex-col"
	);

	const title = document.createElement("h2");
	title.textContent = data.name;
	title.classList.add("text-2xl", "font-bold", "my-4");
	newSection.appendChild(title);

	const entryContainer = document.createElement("ul");
	entryContainer.classList.add(
		"col-start-2",
		"-col-end-2",
		"grid",
		"grid-cols-[repeat(auto-fit,_minmax(min(192px,_320px),_1fr))]",
		"gap-3"
	);
	newSection.appendChild(entryContainer);

	document.body.appendChild(newSection);
};

export default createSections;
