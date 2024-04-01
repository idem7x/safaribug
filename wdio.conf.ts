export const config: WebdriverIO.Config = {
    runner: "local",
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'safari',
        "safari:diagnose": true,
        "safari:automaticInspection": false,
        "safari:acceptInsecureCerts": false,
        "safari:automaticProfiling": false,
        "selenium:webdriver.remote.quietExceptions": false,
        "webkit:WebRTC": {
            "DisableICECandidateFiltering": false,
            "DisableInsecureMediaCapture": false
        },
        "apple:safari.options": {}
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['safaridriver', {
        outputDir: "./reports",
        logFileName: "safaridriver.log"
    }]],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
            // do something
        }
    }
}
