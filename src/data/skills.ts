type SkillListType = {
	category: string
	skills: string[]
}

export const SKILLS: SkillListType[] = [
	{
		category: 'Languages',
		skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Lua', 'Java', 'PHP', 'C#', '.NET'],
	},
	{
		category: 'Back-end',
		skills: ['Node', 'Express', 'Django', 'Laravel', 'NestJS'],
	},
	{
		category: 'Front-end',
		skills: ['React', 'Ember', 'Vue', 'Svelte', 'Angular', 'HTML', 'CSS', 'ES6', 'NextJS', 'Preact', 'Vite', 'Storybook', 'Static-site generators'],
	},
	{
		category: 'Web',
		skills: ['Tailwind', 'Bootstrap', 'Material UI', 'Ant Design', 'Unstyled Components', 'Web Sockets', 'REST/CRUD', 'Accessibility', 'jquery', 'Webpack', 'Babel'],
	},
	{
		category: 'Databases',
		skills: ['SQL', 'NoSQL', 'MySQL', 'PostgresQL', 'MongoDB', 'DocumentDB', 'DynamoDB', 'Redis'],
	},
	{
		category: 'State management',
		skills: ['Redux', 'Mobx', 'React Query', 'GraphQL', 'tRPC'],
	},
	{
		category: 'Cloud',
		skills: ['AWS', 'GCP', 'Azure', 'S3', 'Serverless', 'Lambda', 'EC2', 'ECS', 'SQS', 'IVS', 'Route 53'],
	},
	{
		category: 'Authentication',
		skills: ['Auth0', 'Cognito'],
	},
	{
		category: 'Testing',
		skills: ['Jest', 'Cypress', 'React Testing Library'],
	},
	{
		category: 'Source management',
		skills: ['Git', 'SVN'],
	},
	{
		category: 'Package management',
		skills: ['npm', 'pnpm', 'yarn', 'pip', 'bun'],
	},
	{
		category: 'CI/CD',
		skills: ['Docker', 'Kubernetes'],
	},
	{
		category: 'Collaboration',
		skills: ['Slack', 'Teams', 'Bitbucket', 'GitHub', 'Confluence'],
	},
	{
		category: 'Creative',
		skills: ['Photoshop'],
	},
	{
		category: 'Game engines',
		skills: ['Unreal', 'Unity', 'Source'],
	},
	{
		category: 'Other',
		skills: ['NGINX', 'CI/CD', 'Linux'],
	},
	{
		category: 'Industry-specific',
		skills: ['HIPAA', 'SOC 2', 'FHIR'],
	},
] as const

export const MAIN_SKILLS: string[] = [
	'TypeScript',
	'JavaScript',
	'Node.JS',
	'React',
	'AWS',
	'Python',
	'C++',
	'Lua',
	'C#',
	'Java',
	'Express',
	'Ember',
	'HTML',
	'CSS',
] as const
