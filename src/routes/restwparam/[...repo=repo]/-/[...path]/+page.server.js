import fs from 'node:fs';

import {error} from '@sveltejs/kit';

export const load = ({params}) => {
	try {
		return {
			content: fs.readFileSync(params.path, 'utf-8')
		}
	} catch (e) {
		error(500, `Not found: ${e.message}`)
	}
}
