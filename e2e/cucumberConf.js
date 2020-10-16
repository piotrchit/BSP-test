//protractor.conf.js
exports.config = {
    directConnect : true,
    baseUrl: 'http://test.bauerseo.pl/',
    getPageTimeout: 50000,
    allScriptsTimeout: 50000,
    framework: 'custom', 
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [
      {
      // 'browserName': 'firefox',
      // trustAllSSLCertificates: true,
      // acceptInsecureCerts: true,
      // ACCEPT_SSL_CERTS: true,
      // firefoxOptions: {
      //     args: ['--headless']
      //   },
      //   'moz:firefoxOptions': {
      //     args: [ '--start-maximized',
      //     // '--headless'
      //  ]},

      'browserName': 'chrome',
      trustAllSSLCertificates: true,
      acceptInsecureCerts: true,
      ACCEPT_SSL_CERTS: true,
     
      chromeOptions: {
          args: [
              '--start-maximized',
              // 'incognito'
              // '--headless'
          ]
  }}
                 
  ],  

  
    // Spec patterns are relative to this directory.
    specs: [
      'tests/cucumber/Feature/*/*.feature'
    ],
  
    cucumberOpts: {
      require: 'tests/cucumber/Feature/Step_Defination/shared.steps.ts',
      tags: false,
      // format: ['pretty'],
      format: "json:.tmp/results.json",
      profile: false,
      'no-source': true
    },
   

    onPrepare: function () {
      browser.manage().window().maximize();
      
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json')
      })
    },
 
  //   plugins: [
  //     {package: require.resolve('protractor-simple-cucumber-html-reporter-plugin'),
  //       // package: "",
  //       options: {
  //         automaticallyGenerateReport: true,
  //         removeExistingJsonReportFile: true
  //       }
  //     }
  //   ]
  };