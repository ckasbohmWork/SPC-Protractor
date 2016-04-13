var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');



exports.config = {
  //seleniumServerJar: 'C:\Users\ckasbohm\Desktop\SeleniumRC\selenium-server-standalone-2.39.0.jar',
  //seleniumPort: null,
  chromeDriver: 'C:\Users\YOURLOCATION\chromedriver.exe',// Location of your ChromeDriver File 
  //seleniumArgs: [],

  // sauceUser: 'ckasbohm',
  // sauceKey: '???????',
  
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub', //your unique Selenium Grid ID here
   //seleniumAddress: 'http://hub.browserstack.com/wd/hub',// Or uncomment the Browserstack lines with appropriate credentials to use their service (can also be configured for SauceLabs)
  specs: [
    
	'addOwner.js'
  ],

  capabilities: { 
  'browser' : 'chrome',
  // 'browserstack.user' : 'annika2',
  // 'browserstack.key' : 'f2uAxezsEaBKRvJPNFyS',
  // 'os' : 'Windows',
  // 'os_version' : '7',  
  // 'browser_version' : '11.0', 
  // 'browserstack.debug' : 'true'

  },
 
 
 //The timestamp reporting code- should save a timestamped HTML report file on your local machine
 onPrepare: function() {
      // Add a reporter and store screenshots to `screnshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/screenshots',
         pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
          
            var monthMap = {
              "0": "Jan",
              "1": "Feb",
              "2": "Mar",
              "3": "Apr",
              "4": "May",
              "5": "Jun",
              "6": "Jul",
              "7": "Aug",
              "8": "Sep",
              "9": "Oct",
              "10": "Nov",
              "11": "Dec"
            };

            var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours(),
                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) + 
                                      '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
         }
      }));
   },



};
