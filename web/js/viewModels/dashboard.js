/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
	'ojs/ojcore',
        'knockout',
        'jquery',
        'ojs/ojlabel',
        'ojs/ojselectcombobox',
        'ojs/ojchart',
        'ojs/ojlistview',
        'ojs/ojarraydataprovider',
],
 function(oj, ko, $) {

    function DashboardViewModel() {
      var self = this;
      self.val = ko.observable("pie");
      self.stackValue = ko.observable('off');
      self.orientationValue = ko.observable('vertical');
        
/* chart data */
      var barSeries = [{ name: "Baseball", items: [42, 34] },
                 { name: "Bicycling", items: [55, 30] },
                 { name: "Skiing", items: [36, 50] },
                 { name: "Soccer", items: [22, 46] }];
    
      var barGroups = ["Group A", "Group B"];
   
      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);
      
      
      var url = "js/store_data.json";  //defines link to local data file
                
      self.activityDataProvider = ko.observable();  //gets data for Activities list
      
      $.getJSON(url).then(function(data) {
    // Create variable for Activities list and populate using key attribute fetch
        var activitiesArray = data;
        self.activityDataProvider(new oj.ArrayDataProvider(activitiesArray, { keyAttributes: "id" }));
    });
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
