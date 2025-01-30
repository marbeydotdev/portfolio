import {base} from '$app/paths';

export const projects: {
	[key: string]: {
		"name": string,
		"icon": string,
		"color": string,
		"short": string,
		"description": string,
		"features": string[],
		"media": {
			"url": string,
			"description": string
		}[],
		"contributions": string[],
		"technologies": string[]
	}
} = {
	"Q3MonitoringDashboard": {
		"name": "Q3 Monitoring Dashboard",
		"icon": `${base}/assets/q3dashboard/logo.svg`,
		"color": "#ff0000",
		"short": "Machine/mold monitoring and maintenance dashboard.",
		"description": "This project focused on creating a dashboard for Q3 Concept B.V. that allows users to monitor machines and molds in real-time. Using the dashboard, users can also plan maintenance for molds using a manual or milestone-based approach.",
		"features": [
			"Real-time monitoring of machines and molds.",
			"Ability to plan maintenance for molds using a manual or milestone-based approach.",
			"Historical usage insights for machines and molds, optimized using materialized views.",
			"Sleek and responsive user interface."
		],
		"media": [
			{
				"url": `${base}/assets/q3dashboard/q4dashboard.mp4`,
				"description": "The application demo video."
			}
		],
		"contributions": [
			"Programmed the maintenance calendar.",
			"Created a mold health assessment using patterns in historical data.",
			"Assisted in database design.",
			"Designed front-end elements using Figma."
		],
		"technologies": [
			"Supabase",
			"NextJS",
			"Docker"
		]
	},
	"DHLConsolidator": {
		"name": "DHL Consolidator",
		"icon": `${base}/assets/dhlconsolidator/icon.png`,
		"color": "#ffc207",
		"short": "Dedicated application replacement for DHL's macro-based Excel spreadsheets for shipping.",
		"description": "This project focused on creating a web application that replaces DHL's macro-based Excel spreadsheets for the shipping department. It serves as an all-in-one replacement, that combines label printing, manifest printing and scanning into a single lightweight (~10kb!) and performant application.",
		"features": [
			"Scan cases (and their respective dealers) for verification.",
			"Print scannable labels for every dealer.",
			"Print manifests for the transporters.",
			"Check for scan errors.",
			"Switch scanlists by scanning a printable code, instead of having to walk back to the computer.",
			"Persistently store every scan (locally) to prevent data-loss on power failure or reboot."
		],
		"media": [
			{
				"url": `${base}/assets/dhlconsolidator/consolidatordemo.mp4`,
				"description": "The application demo video."
			}
			],
		"contributions": [
			"Programmed the scanner functionality",
			"Programmed the scanlist functionality",
			"Programmed the manifest functionality",
			"Programmed the error checking functionality",
			"Programmed the data persistence functionality"],
		"technologies": [
			"SvelteKit"
		]
		},
	"Power2Go": {
		"name": "Power2Go",
		"icon": `${base}/assets/power2go/icon.png`,
		"short": "Powerbank lending system.",
		"description": "This project focused on creating a powerbank loaning system where users can sign up for an app, scan the qr code on a physical powerbank station and take out a powerbank. They can be returned to any of the powerbank stations.",
		"features": [
			"Lend powerbanks by scanning a QR code on a physical powerbank station.",
			"View nearby stations sorted by distance in the app.",
			"Fully automatic powerbank dispensing."
		],
		"color": "#fb8535",
		"media": [
			{
				"url": `${base}/assets/power2go/info.mp4`,
				"description": "The project infomercial, in Dutch."
			},
			{
				"url": `${base}/assets/power2go/accountinfo.png`,
				"description": "The account screen, where account information can be changed."
			},
			{
				"url": `${base}/assets/power2go/history.png`,
				"description": "The loaning history page, where users can see where and how long they loaned a powerbank."
			},
			{
				"url": `${base}/assets/power2go/homescreen.png`,
				"description": "The landing page of the app."
			},
			{
				"url": `${base}/assets/power2go/login.png`,
				"description": "The login page of the app."
			},
			{
				"url": `${base}/assets/power2go/stations.png`,
				"description": "The powerbank station listing in the app."
			}
		],
		"contributions": [
			"Handled the programming of the physical powerbank station slots, running on a Raspberry Pi 4b.",
			"Designed and implemented the front-end.",
			"Created the infomercial."
		],
		"technologies": [
			"ASP.NET Blazor",
			"Raspberry Pi"
			]
	},

	"SHC": {
		"name": "Squad Health Check Front-office",
		"icon": `${base}/assets/shc/icon.png`,
		"color": "#e2ca02",
		"short": "Questionnaires that help gauge factors like code quality, team satisfaction, etc.",
		"description": "This project focused on creating the front-end for a questionnaire application that can be used to determine how well certain aspects of development are going within a team of people assigned to a project at a certain company.",
		"features": [
			"High quality application design",
			"AI-enhanced comment rewrite tool",
			"Answer questions with green, orange or red",
			"Optionally include a note on any question for further clarification"
		],
		"media": [
			{
				"url": `${base}/assets/shc/erd.jpg`,
				"description": "Database diagram."
			},
			{
				"url":`${base}/assets/shc/analysis.pdf`,
				"description": "Analysis document."
			},
			{
				"url": `${base}/assets/shc/figma.png`,
				"description": "Figma design."
			}
		],
		"contributions": [
			"Programmed the AI rewrite functionality",
			"Helped design the application",
			"Helped implement the design into the actual application",
			"Helped connect the database layer to the front-end",
			"Implemented progress saving."
		],
		"technologies": [
			"SvelteKit",
			"ASP.NET"
		]
	}
}