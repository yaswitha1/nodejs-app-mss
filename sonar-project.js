const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.110.45.75:9000',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsyaswithaTechnologies',
	    'sonar.login': '22585b51b3c81910fae7f2de8cec7beb3fbd3b30',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
