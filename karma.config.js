// Karma configuration
// Generated on Sun Mar 01 2020 14:27:38 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "./aframe.min.js",
      "Human_Brain/scripts/aframe-extras.min.js.js",
      "Human_Brain/scripts/utility.js",
      "Human_Brain/scripts/voiceover.js",
      "Human_Brain/scripts/gamemanager.js",
      "Human_Brain/scripts/cardboardjoystick.js",
      "Human_Brain/scripts/colorchange.js",
      "Human_Brain/scripts/questionmanager.js",
      "Human_Brain/scripts/scoremanager.js",
      "Human_Brain/scripts/databasemanager.js",
      "Human_Brain/scripts/login.js",
      "Human_Brain/appdata.js",
      "Human_Brain/scripts/cursorzoom.js",
      "Human_Brain/scripts/highlight.js",
      "Human_Brain/scripts/animation.js",
      "Human_Brain/scripts/raycastlistener.js",
      "Human_Brain/human_brain.js",
      "tests/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
 //   reporters: ["progress"],


    // web server port
//    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//    browsers: ["Chrome"],
customLaunchers: {
ChromeHeadless: {
 base: 'Chrome',
 flags: [
 '--headless','--disable-gpu',
 '--no-sandbox',
 '--remote-debugging-port=9222']
 }
},
browsers: ['ChromeHeadless'],
singleRun: true
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
//    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
 //   concurrency: 1
  });
};
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'html'],

    htmlReporter: {
      outputFile: 'tests/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false
    }
  });
};
