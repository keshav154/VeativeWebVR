module.exports = function(config) {
    config.set({
        basePath: "./",
        frameworks: ["jasmine"],
        files: [
            "Lewis_Dot_Structures/scripts/aframe.1.0.3.min.js",
            "Lewis_Dot_Structures/scripts/utility.js",
            "Lewis_Dot_Structures/scripts/voiceover.js",
            "Lewis_Dot_Structures/scripts/gamemanager.js",
            "Lewis_Dot_Structures/scripts/cardboardjoystick.js",
            "Lewis_Dot_Structures/scripts/colorchange.js",
            "Lewis_Dot_Structures/scripts/questionmanager.js",
            "Lewis_Dot_Structures/scripts/scoremanager.js",
            "Lewis_Dot_Structures/scripts/hoverregion.js",
            "Lewis_Dot_Structures/scripts/animation.js",
            "Lewis_Dot_Structures/scripts/databasemanager.js",
            "Lewis_Dot_Structures/appdata.js",
            "Lewis_Dot_Structures/scripts/cursorzoom.js",
            "Lewis_Dot_Structures/scripts/login.js",
            "Lewis_Dot_Structures/scripts/highlight.js",
            "Lewis_Dot_Structures/scripts/dragobject.js",
            "Lewis_Dot_Structures/scripts/raycastlistener.js",
            "Lewis_Dot_Structures/scripts/carbondrag.js",
            "Lewis_Dot_Structures/scripts/oxygendrag.js",
            "Lewis_Dot_Structures/scripts/nitrogendrag.js",
            "Lewis_Dot_Structures/scripts/hydrogenfluorindrag.js",

            "tests/Lewis_Dot_Structures.test.js",
            "tests/voiceover.test.js"
        ],
        preprocessors: {
            // "Lewis_Dot_Structures/scripts/utility.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/aframe.1.0.3.min.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/utility.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/voiceover.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/gamemanager.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/cardboardjoystick.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/colorchange.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/questionmanager.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/scoremanager.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/hoverregion.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/animation.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/databasemanager.js": ["coverage"],
            "Lewis_Dot_Structures/appdata.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/cursorzoom.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/login.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/highlight.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/dragobject.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/raycastlistener.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/carbondrag.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/oxygendrag.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/nitrogendrag.js": ["coverage"],
            "Lewis_Dot_Structures/scripts/hydrogenfluorindrag.js": ["coverage"]

            // "tests/dummy.js": ["coverage"]
            //   "**/src/app/*.js": ["coverage"],
        },
        plugins: ["karma-jasmine", "karma-chrome-launcher", "karma-coverage"],
        reporters: ["progress", "coverage"],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: "coverage/",
            reporters: [{ type: "html", subdir: "html" }, { type: "text-summary" }]
        }
    });
};

