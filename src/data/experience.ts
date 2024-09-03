type ExperienceType = {
    name: string
    title: string
    startDate: string
    endDate?: string
	description: string
    url?: string
    linkedin?: string
    image?: string
    skills?: string
	bullets?: string[]
}

export const EXPERIENCE: ExperienceType[] = [
    {
        name: 'SustainaBase',
        url: 'https://sustainabase.com',
        linkedin: 'https://www.linkedin.com/company/sustainabase',
        image: 'logos/sustainabase.png',
        title: 'Senior Software Engineer',
        startDate: '05/2023',
 		description: `Main engineer for both the React front-end and Node back-end.
			Used modern TypeScript, React, and cloud services (AWS).
            Mentored and did code reviews.
			We provided a B2B SaaS product for carbon tax and emissions tracking.`,
        skills: 'Redux, Tailwind, MySQL, MongoDB, Prisma, Auth0, Express, Serverless, S3',
    	bullets: [
            'Automated customer data processing, reducing time needed from data engineers by 70%.',
    		'Restructured legacy database, reducing page load times by 30%. Reduced storage cost by 50%.',
        ],
    },

    {
        name: 'Apricity Health',
        url: 'https://apricity-health.com',
        linkedin: 'https://www.linkedin.com/company/apricity-health',
        image: 'logos/apricityhealth.svg',
        title: 'Senior Software Engineer',
        startDate: '12/2022',
        endDate: '01/2023',
        description: `Took ownership of the front-end and did back-end development for multiple React and Node apps.
			Mentored and reviewed the code of entire team.
			Resolved years of technical debt, eliminated security vulnerabilities, and refactored code to modern standards.
            Maintained HIPAA compliance, SOC 2 compliance, and worked with FHIR records while creating patient portals.`,
		skills: 'TypeScript, Redux, GraphQL, Jest, DocumentDB, Serverless, S3, SQS, Docker, Material UI',
    	bullets: [
            'Created a data caching system, vastly reducing page load times by up to 90%.',
    		'Resolved years of technical debt and refactored the code base size down by 30%, reducing required work from developers.',
        ],
    },

	{
        name: 'Mosaic Learning',
        url: 'https://www.mosaiclearning.com',
        linkedin: 'https://www.linkedin.com/company/mosaiclearning',
        image: 'logos/mosaiclearning.png',
        title: 'Software Engineer',
        startDate: '01/2020',
        endDate: '11/2022',
        description: `Worked on many different projects that included Ember, React, Node, PHP, Java, or Laravel.
			Chosen out of a company of roughly 15 engineers to spearhead the company migration from Ember, Java, and PHP to modern React and Node.
			Took front-end ownership of a conferencing app which saw success during COVID and was featured in a post on the official AWS blog. Mentored other engineers, especially for front-end development.`,
		skills: 'JavaScript, Express, Jest, Storybook, MongoDB, GraphQL, DynamoDB, S3, Lambda, Serverless, EC2, Docker, Cognito, IVS, MySQL, Java, Web Sockets, Material UI',
    },

    {
		name: 'NoxFire Group',
        image: 'logos/noxfire.png',
        title: 'Software Engineer',
        startDate: '12/2018',
        endDate: '12/2019',
        description: `Worked on company and event websites. Conducted event broadcasts.`,
		skills: 'JavaScript, Node, React, Express, UI/UX, Photoshop',
    },

	{
        name: 'Altik',
        title: 'Software Engineer',
        startDate: '04/2017',
        endDate: '12/2018',
        description: `Worked on back-end and front-end of sportsbook software.`,
		skills: 'JavaScript, Node, PHP, MySQL, HTML/CSS, jQuery',
    },
] as const
