import { Component, AfterViewInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private shepherdService: ShepherdService) { }
  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = tour.defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(steps);
    this.shepherdService.start();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

const tour = {
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: {
      enabled: true
    },
    canClickTarget: true,
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20]
          }
        }
      ]
    },
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 4
  },
};

const steps = [
  {
    id: ".example-step1",
    title: "Step 1",
    text: "Hanwen's demo",
    attachTo: {
      element: ".example-step1",
      on: "bottom"
    },
    buttons: [
      {
        classes: "cancel-button",
        text: "Exit",
        type: "cancel"
      },
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    classes: '',
    highlightClass: "highlight",
  }, {
    id: "example-step2",
    title: "Step 2",
    text: "Hanwen's demo2",
    attachTo: {
      element: ".example-step2",
      on: "bottom"
    },
    buttons: [
      {
        classes: "cancel-button",
        text: "Exit",
        type: "cancel"
      },
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    classes: '',
    highlightClass: "highlight",

  }, {
    id: "example-step3",
    title: "Step 3",
    text: "Hanwen's demo3",
    attachTo: {
      element: ".example-step3",
      on: "bottom"
    },
    buttons: [
      {
        classes: "cancel-button",
        text: "Exit",
        type: "cancel"
      },
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    classes: '',
    highlightClass: "highlight",

  }, {
    id: "example-step4",
    title: "Step 4",
    text: "Hanwen's demo4",
    attachTo: {
      element: ".example-step4",
      on: "bottom"
    },
    buttons: [
      {
        classes: "cancel-button",
        text: "Exit",
        type: "cancel"
      },
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back"
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next"
      }
    ],
    classes: '',
    highlightClass: "highlight",

  }
];