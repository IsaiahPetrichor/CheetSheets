// status of dedicated learning time (outside of experience)
const learningStatus = ['not started', 'in queue', 'learning', 'done'];

// crucial topics I need to learn to master front-end development
const topics = {
	// skill key = knowledge and skill out of 5
	technologies: {
		html: {
			description: 'Semantic HTML / SEO optimization',
			skill: 5,
			learning: learningStatus[3],
		},

		openGraph: {
			description: 'Open Graph Protocol',
			skill: 1,
			learning: learningStatus[1],
		},

		DOM: {
			description: 'Document Object Model',
			skill: 3,
			learning: learningStatus[1],
		},

		dataValidation: {
			description: 'Form & Data Validation',
			skill: 4,
			learning: learningStatus[1],
		},

		webComp: {
			description: 'Web Components',
			skill: 1,
			learning: learningStatus[0],
		},

		boxModel: {
			description: 'CSS Box Model',
			skill: 5,
			learning: learningStatus[3],
		},

		layout: {
			description: 'CSS Layouts, Grid / Flex',
			skill: 4,
			learning: learningStatus[3],
		},

		units: {
			description: 'CSS size units',
			skill: 4,
			learning: learningStatus[3],
		},

		CSS3: {
			description: 'CSS3+ features',
			skill: 2,
			learning: learningStatus[0],
		},

		responsive: {
			description: 'Responsive CSS Design',
			skill: 4,
			learning: learningStatus[3],
		},

		animations: {
			description: 'CSS Animations',
			skill: 2,
			learning: learningStatus[0],
		},

		SAAS: {
			description: 'POSTCSS / SASS',
			skill: 1,
			learning: learningStatus[0],
		},

		prototypes: {
			description: 'JavaScript Prototypes',
			skill: 2,
			learning: learningStatus[0],
		},

		async: {
			description: 'Asyncronous JS',
			skill: 3,
			learning: learningStatus[1],
		},

		debugging: {
			description: 'JS Debugging & Profiling',
			skill: 2,
			learning: learningStatus[0],
		},

		ecosystem: {
			description: 'JS Ecosystem (webpack & babel, etc.)',
			skill: 4,
			learning: learningStatus[2],
		},

		tailwind: {
			description: 'Tailwind CSS',
			skill: 1,
			learning: learningStatus[0],
		},

		matUI: {
			description: 'Material UI',
			skill: 1,
			learning: learningStatus[0],
		},

		hooks: {
			description: 'React Hooks',
			skill: 3,
			learning: learningStatus[1],
		},

		reactEco: {
			description: 'React Ecosystem',
			skill: 2,
			learning: learningStatus[0],
		},

		nextJs: {
			description: 'NextJS',
			skill: 1,
			learning: learningStatus[0],
		},
	},

	print() {
		for (let tech in this.technologies) {
			console.log(
				`\n${this.technologies[tech].description}\n-----------------------------------`
			);
			console.log(`Skill level: ${this.technologies[tech].skill}`);
			console.log(`Learning status: ${this.technologies[tech].learning}\n`);
		}
	},

	printByStatus(num) {
		for (let tech in this.technologies) {
			if (this.technologies[tech].learning == learningStatus[num]) {
				console.log(
					`\n${this.technologies[tech].description}\n-----------------------------------`
				);
				console.log(`Skill level: ${this.technologies[tech].skill}`);
				console.log(`Learning status: ${this.technologies[tech].learning}\n`);
			}
		}
		console.log('-----------------------------------');
	},

	printBySkillLevel(num) {
		for (let tech in this.technologies) {
			if (this.technologies[tech].skill == num) {
				console.log(
					`\n${this.technologies[tech].description}\n-----------------------------------`
				);
				console.log(`Skill level: ${this.technologies[tech].skill}`);
				console.log(`Learning status: ${this.technologies[tech].learning}\n`);
			}
		}
		console.log('-----------------------------------');
	},
};

console.log('Current Front-End Learning:');
topics.printByStatus(2);

console.log('In-Queue Front-End Learning:');
topics.printByStatus(1);
