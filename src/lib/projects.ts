import {base} from '$app/paths';

export const projects = {
	"Power2Go": {
		"name": "Power2Go",
		"icon": `${base}/power2go/icon.png`,
		"short": "Powerbank lending system.",
		"description": "This project focused on creating a powerbank loaning system where users can sign up for an app, scan the qr code on a physical powerbank station and take out a powerbank. They can be returned to any of the powerbank stations.",
		"features": [
			"Lend powerbanks by scanning a QR code on a physical powerbank station.",
			"View nearby stations sorted by distance in the app.",
			"Fully automatic powerbank dispensing."
		],
		"color": 20,
		"media": [
			{
				"url": `${base}/power2go/info.mp4`,
				"description": "The project infomercial, in Dutch."
			},
			{
				"url": `${base}/power2go/accountinfo.png`,
				"description": "The account screen, where account information can be changed."
			},
			{
				"url": `${base}/power2go/history.png`,
				"description": "The loaning history page, where users can see where and how long they loaned a powerbank."
			},
			{
				"url": `${base}/power2go/homescreen.png`,
				"description": "The landing page of the app."
			},
			{
				"url": `${base}/power2go/login.png`,
				"description": "The login page of the app."
			},
			{
				"url": `${base}/power2go/stations.png`,
				"description": "The powerbank station listing in the app."
			}
		],
		"contributions": [
			"Handled the programming of the physical powerbank station slots, running on a Raspberry Pi 4b.",
			"Designed and implemented the front-end.",
			"Created the infomercial."
		]
	},

	"SHC": {
		"name": "Squad Health Check Front-office",
		"icon": `${base}/shc/icon.png`,
		"color": 42,
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
				"url": `${base}/shc/erd.jpg`,
				"description": "Database diagram."
			},
			{
				"url":`${base}/shc/analysis.pdf`,
				"description": "Analysis document."
			},
			{
				"url": `${base}/shc/figma.png`,
				"description": "Figma design."
			}
		],
		"contributions": [
			"Programmed the AI rewrite functionality",
			"Helped design the application",
			"Helped implement the design into the actual application",
			"Helped connect the database layer to the front-end",
			"Implemented progress saving."
		]
	}
}