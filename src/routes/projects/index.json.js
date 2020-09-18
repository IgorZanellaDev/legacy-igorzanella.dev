import projects from './_projects.js';

const contents = JSON.stringify(projects.map(project => {
	return project;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}