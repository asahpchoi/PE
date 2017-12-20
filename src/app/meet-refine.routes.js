angular
  .module('app')
  .config(meetRefineRoutes);

/** @ngInject */
function meetRefineRoutes($stateProvider) {
  // In data property, do not use navBack name since it is reserved for navigation-button directive
  $stateProvider
    .state('app.login', {
      url: 'login',
      views: {
        'mainContent@app': 'mrLogin'
      },
      data: {
        navNext: 'app.content.companyProfile',
        navParent: 'app.customerList'
      },
      onEnter: function () {
        rememberLastFacing('app.login');
        turnOnPassCode();
      }
    })
    .state('app.content.intro', {
      url: 'intro',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrIntroduction'
      }
    })
    .state('app.content.aboutManulife', {
      url: 'about-manulife',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrAboutManulife'
      },
      data: {
        navNext: 'app.content.companyProfile'
      },
      onEnter: function () {
        rememberLastFacing('app.content.aboutManulife');
        turnOnPassCode();
      }
    })
    .state('app.content.recommendedProducts', {
      url: 'recommendedProducts',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrRecommendedProducts'
      },
      data: {
        navPrevious: 'app.content.fnaSummary',
        navNext: 'app.content.endOfMeeting',
        parentState: 'app.content.solutions'
      },
      onEnter: function () {
        rememberLastFacing('app.content.recommendedProducts');
        turnOnPassCode();
      }
    })
    .state('app.content.endOfMeeting', {
      url: 'endOfMeeting',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrEndOfMeeting'
      },
      data: {
        navPrevious: 'app.content.recommendedProducts',
        parentState: 'app.content.solutions'
      },
      onEnter: function () {
        rememberLastFacing('app.content.endOfMeeting');
        turnOnPassCode();
      }
    })
    .state('app.content.reports', {
      url: 'reports',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrReports'
      },
      data: {
        navPrevious: 'app.content.recommendedProducts'
      },
      onEnter: function () {
        rememberLastFacing('app.content.reports');
        turnOnPassCode();
      }
    })
    .state('app.content.fnaReport', {
      url: 'fnaReport/:fnaHistoryId',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrFnaReport'
      },
      data: {
        navPrevious: 'app.content.reports',
        parentState: 'app.content.solutions'
      },
      onEnter: function () {
        rememberLastFacing('app.content.fnaReport');
        turnOnPassCode();
      }
    })
    .state('app.content.referrals', {
      url: 'referrals',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrReferrals'
      },
      data: {
        navPrevious: 'app.content.recommendedProducts'
      },
      onEnter: function () {
        rememberLastFacing('app.content.referrals');
        turnOnPassCode();
      }
    })
    .state('app.content.companyProfile', {
      url: 'companyProfile',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrCompanyProfile'
      },
      data: {
        navParent: 'app.content.aboutManulife',
        navNext: 'app.content.yourAdvisor',
        parentState: 'app.content.aboutManulife'
      },
      onEnter: function () {
        rememberLastFacing('app.content.companyProfile');
        turnOnPassCode();
      }
    })
    .state('app.content.yourAdvisor', {
      url: 'yourAdvisor',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrYourAdvisor'
      },
      data: {
        navParent: 'app.content.aboutManulife',
        navPrevious: 'app.content.companyProfile',
        navNext: 'app.content.ourApproach',
        parentState: 'app.content.aboutManulife'
      },
      onEnter: function () {
        rememberLastFacing('app.content.yourAdvisor');
        turnOnPassCode();
      }
    })
    .state('app.content.ourApproach', {
      url: 'ourApproach',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrOurApproach'
      },
      data: {
        navParent: 'app.content.aboutManulife',
        navPrevious: 'app.content.yourAdvisor',
        navNext: 'app.content.financialPlanning',
        parentState: 'app.content.aboutManulife'
      },
      onEnter: function () {
        rememberLastFacing('app.content.ourApproach');
        turnOnPassCode();
      }
    })
    .state('app.content.financialPlanning', {
      url: 'financialPlanning',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrFinancialPlanning'
      },
      data: {
        navParent: 'app.content.aboutManulife',
        navPrevious: 'app.content.ourApproach',
        navNext: 'app.content.selectingYourGoals',
        parentState: 'app.content.aboutManulife'
      },
      onEnter: function () {
        rememberLastFacing('app.content.financialPlanning');
        turnOnPassCode();
      }
    })
    .state('app.content.selectingYourGoals', {
      url: 'selectingYourGoals',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrSelectingYourGoals'
      },
      data: {
        navNext: 'app.content.calculateYourGoals',
        parentState: 'app.content.financialNeedsAnalysis'
      },
      onEnter: function () {
        rememberLastFacing('app.content.selectingYourGoals');
        turnOnPassCode();
      }
    })
    .state('app.content.calculateYourGoals', {
      url: 'calculateYourGoals',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrCalculateYourGoals'
      },
      data: {
        navPrevious: 'app.content.selectingYourGoals',
        navNext: 'app.content.fnaSummary',
        parentState: 'app.content.financialNeedsAnalysis'
      },
      onEnter: function () {
        rememberLastFacing('app.content.calculateYourGoals');
        turnOnPassCode();
      }
    })
    .state('app.content.fnaSummary', {
      url: 'fnaSummary',
      views: {
        'leftContent@app.content': 'menuMaster',
        'rightContent@app.content': 'mrFnaSummary'
      },
      data: {
        navPrevious: 'app.content.calculateYourGoals',
        parentState: 'app.content.financialNeedsAnalysis',
        navNext: 'app.content.recommendedProducts'
      },
      onEnter: function () {
        rememberLastFacing('app.content.fnaSummary');
        turnOnPassCode();
      }
    })
    .state('app.resourceLibrary', {
      url: 'resourceLibrary',
      views: {
        'mainContent@app': 'mrResourceLibrary'
      }
    })
    .state('app.advisorProfile', {
      url: 'advisorProfile',
      views: {
        'mainContent@app': 'mrAdvisorProfile'
      },
      data: {
        navParent: 'app.customerList'
      }
    })
    .state('app.customerList', {
      url: 'customerList',
      views: {
        'mainContent@app': 'mrCustomerList'
      },
      data: {
        nextState: 'app.login',
        editState: 'app.addCustomer'
      },
      resolve: {
        address: function (address) {
          return address.getAddressList();
        }
      },
      onEnter: function () {
        removeLastFacing();
      }
    })
    .state('app.addCustomer', {
      url: 'addCustomer',
      views: {
        'mainContent@app': 'mrAddCustomer'
      },
      data: {
        parentState: 'app.customerList',
        parentName: 'Customer List',
        navParent: 'app.customerList'
      }
    })
    .state('app.productList', {
      url: 'productList',
      views: {
        'mainContent@app': 'mrProductList'
      }
    })
    .state('app.proposals', {
      url: 'proposals',
      views: {
        'mainContent@app': 'mrProposals'
      }
    })
    .state('app.applicationList', {
      url: 'applicationList',
      views: {
        'mainContent@app': 'mrApplicationList'
      }
    })
    .state('app.settings', {
      url: 'settings',
      views: {
        'mainContent@app': 'mrSettings'
      }
    })
    .state('app.support', {
      url: 'support',
      views: {
        'mainContent@app': 'mrSupport'
      }
    })
    .state('app.educationCalculation', {
      url: 'educationCalculation',
      views: {
        'mainContent@app': 'educationNeedsCalc'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.futureValueCalculation', {
      url: 'futureValueCalculation',
      views: {
        'mainContent@app': 'futureValueCalc'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.protectionCalculation', {
      url: 'protectionCalculation',
      views: {
        'mainContent@app': 'protectionNeedsCalc'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.investmentCalculation', {
      url: 'investmentCalculation',
      views: {
        'mainContent@app': 'simpleInvestCalc'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.retirementCalculation', {
      url: 'retirementCalculation',
      views: {
        'mainContent@app': 'simpleRetirementCalc'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.lifeHealthCollector', {
      url: 'lifeHealthCollector',
      views: {
        'mainContent@app': 'lifeHealthCollector'
      },
      data: {
        parentState: 'app.content.calculateYourGoals'
      }
    })
    .state('app.referralList', {
      url: 'referralList',
      views: {
        'mainContent@app': 'mrReferralList'
      },
      data: {}
    })
    .state('app.softwareDisclaimer', {
      url: 'softwareDisclaimer',
      views: {
        'mainContent@app': 'mrSoftwareDisclaimer'
      },
      data: {
        navNext: 'app.customerList'
      }
    }).state('app.productView', {
      url: 'productView',
      views: {
        'mainContent@app': 'mrProductView'
      }
    });
}

// Save the facing screen
// Facing screens are the screens which is allow for customer freely to view
function rememberLastFacing(stateName) {
  window.localStorage.setItem('lastFacingScreen', stateName);
}

function removeLastFacing() {
  window.localStorage.setItem('lastFacingScreen', '');
}

function turnOnPassCode() {
  window.localStorage.setItem('onPassCode', true);
}
