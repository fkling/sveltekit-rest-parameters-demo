import fs from 'node:fs';

export const load = () => {
	return {root: walk('src/routes')};
}

function walk(dir) {
	let children = [];
	for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
		const isDirectory = entry.isDirectory();
		const path = `${entry.path}/${entry.name}`
		if (isDirectory) {
			children.push({
				name: entry.name,
				...walk(path),
			})
		} else {
			children.push({
				name: entry.name,
				path,
			})
		}
	}

	return {
		path: dir,
		children,
		isDirectory: true,
	}
}
