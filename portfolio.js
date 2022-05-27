import emoji from "react-easy-emoji";

export const greetings = {
	name: "Nivishree Palvannan",
	title: "Hi all, I am Nivishree",
	description:
		"A passionate and innovative Full Stack Web Developer with 2+ years experience of building and maintaing Web applications with JavaScript / TypeScript / Angaular JS / Nodejs / Python / PostgresSQL / Flask and some other modern libraries and frameworks.",
	resumeLink: "https://cv.nivishree.ga",
};

export const openSource = {
	githubUserName: "nivishree",
};

export const contact = {};

export const socialLinks = {
	facebook: "",
	instagram: "https://www.instagram.com/nivi_pal",
	github: "https://github.com/nivishree",
	linkedin: "https://www.linkedin.com/in/nivishree-palvannan-543845166/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"INNOVATIVE AND PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Developed robust Selenium page object model framework with Selenium web driver"
		),
		emoji(
			"⚡ Solid experience with Gherkin language for behavior driven testing."
		),
		emoji(
			"⚡ Containerized all microservices and its dependencies into one package using Docker"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "AngularJS",
			fontAwesomeClassname: "vscode-icons:file-type-angular",
		},
		{
			skillName: "VueJS",
			fontAwesomeClassname: "vscode-icons:file-type-vue",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Flask",
			fontAwesomeClassname: "logos:flask",
		},
		{
			skillName: "Jenkins",
			fontAwesomeClassname: "logos:jenkins",
		},
		{
			skillName: "JSON",
			fontAwesomeClassname: "logos:json",
		},
		{
			skillName: "Drupal",
			fontAwesomeClassname: "logos:drupal",
		},
		{
			skillName: "XML",
			fontAwesomeClassname: "vscode-icons:file-type-xml",
		},
	],
};

export const SkillBars = [

];

export const educationInfo = [
	{
		schoolName: "Virginia Tech",
		subHeader: "Master of Science in Computer Science",
		duration: "August 2021 - May 2023",
		desc: "GPA: 3.9/4",
		descBullets: [
			"Graduate Research Assistant",
			"Specializatin in web development and HCI",
			"Relevant Course work: Usability Engineering, Web Application Development, Data Structures and Algorithms"
		],
	},
	{
		schoolName: "PSG College of Technology",
		subHeader: "Bachelor's of Engineering in Electronics and Communication Engineering",
		duration: "July 2015 - May 2019",
		desc: "GPA: 8.54/10",
		descBullets: [
			"Relevant Course Work: Computer Architecture, Computer Networks, Operating Systems, Soft computing techniques, Digital Communication, C++, Data Structures and Algorithms, Python",
		],
	},
];

export const experience = [
	{
		role: "Information Technology Intern",
		company: "Virginia Tech Foundation",
		companylogo: "/img/icons/common/vtf.png",
		date: "October 2021 – Present",
		descBullets: ["Independently maintained front end Drupal sites for VT foundation Dashboard",      
		"Used GIMP to design a logo for the official use of VT Foundation",],
	},
	{
		role: "Software Engineer",
		company: "Philips Healthcare",
		companylogo: "/img/icons/common/philips.png",
		date: "June 2019 – August 2021",
		desc: "Developed an End-End framework for hospitals treating cancer patients ",
		descBullets: [
			"Implemented Flask Rest APIs to provide endpoints which simplifies user interaction with Pinnacle (radiation treatment planning software) and used JMeter for analyzing and measuring the performance of variety of services.",
			"Developed a frontend framework using AngularJS for hospitals for managing patients and to launch Pinnacle application and to perform radiation treatment planning.",
		],
	},
	{
		role: "Software Developer Intern",
		company: "Philips Healthcare",
		companylogo: "/img/icons/common/philips.png",
		date: "Jan 2019 – June 2019",
		descBullets: ["Developed the code quality of existing code base using TICS framework",
		"Developed a consolidated database using Postgres SQL between workflow manager and patient monitoring system",],
	},
];

export const projects = [
	{
		name: "Wearable Inspection and Report Management System (WIRMS)",
		desc: "UX designing for an Augmented Reality application developed in conjunction with the Virginia Department of Transportation (VDOT) that provides bridge inspectors with tools for developing and generating on-site bridge inspection reports. ",
		link: "https://github.com/nivishree",
	},
	{
		name: "Online Bookstore Website Development",
		desc: "Independently developed a user interactive “Online Bookstore” where the order can be booked, and payments can be done shortly along with getting all the required details regarding each book",
		link: "https://github.com/nivishree",
	},
	{
		name: "Intelligent Robot for Blind ",
		desc: "Collaborated a team of 3 and designed an intelligent path guiding robot interfaced with camera. Modelled an image classifier using Convolutional Neural Networks with an accuracy greater than 90%",
		link: "https://github.com/nivishree",
	},
	{
		name: "Food Delivery Application",
		desc: "Built an android application that connects passengers with several restaurants on the Indian Rail network. It completes an entire fulfillment cycle right from the point of ordering to Delivery, Customer feedback and Reconciliation",
		link: "https://github.com/nivishree",
	},
	{
		name: "Case Study: Nursing Dashboard",
		desc: "Designed a dashboard that can be used for Intensive care unit(ICU) which notifies which patient needs emergency timely care and warns the nurses in duty",
		link: "https://github.com/nivishree",
	},
];

