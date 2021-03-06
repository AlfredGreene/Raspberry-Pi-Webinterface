var config = {
	api : {
		weather : {
			url : "http://api.openweathermap.org/data/2.5/forecast/daily",
			// INSERT OPENWEATHERAPI KEY HERE
			appId : "api-key"
			cityId : "2806946",
			days : 3,
			language : "de",
			units : "metric"
		},
		temperature : {
			url : "/services/temperature/get-live-temp.php",
			history : {
				url: "/services/temperature/db-select.php",
				limit: 100
			},
			updateInterval : 20000
		},
		calendar : {
			url : "/services/calendar.php",
			text : {
				today : "Today",
				tomorrow : "Tomorrow"
			}
		},
		hue : {
			url : "/services/hue.php"
		},
		news : {
			url : "/services/rss.php",

			// RSS FEED URL
			feedUrl : "http://www.bild.de/rssfeeds/vw-news/vw-news-16726644,sort=1,view=rss2.bild.xml",
			count : 4
		}
	},
	dayNames : ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]
};