const createEntries = (data) => {
    const entry = document.createElement('li');
    const entryOmage = document.createElement('img');
    entryOmage.src = data.sprites.front_default;
    entryOmage.alt = data.name;
    const entryName = document.createElement('h3');
    entryName.textContent = data.name;
    entry.appendChild(entryOmage);
    entry.appendChild(entryName);
    const sections = document.querySelectorAll('section ul');
    const lastSection = sections[sections.length - 1];
    lastSection.appendChild(entry);
}