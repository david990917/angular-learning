import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShepherdService } from 'angular-shepherd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private shepherdService: ShepherdService,
    private router: Router) { }
  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = tour.defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(this.steps);
    this.shepherdService.start();
  }


  steps = [
    {
      id: "example-step1",
      title: "Step 1",
      text: "Welcome to Hanwen's projects",
      attachTo: {
        element: ".example-step1", on: 'auto' as const,
      },
      buttons: [
        // {
        //   classes: "cancel-button",
        //   text: "Exit",
        //   type: "cancel"
        // },
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
        element: ".example-step2", on: 'auto' as const,
      },
      buttons: [
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
        element: ".example-step3", on: 'auto' as const,
      },
      buttons: [
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
        element: ".example-step4", on: 'auto' as const,

      },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back"
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next"
        },
        {
          classes: "shepherd-button-primary",
          text: "Switch Page",
          action: () => {
            this.router.navigateByUrl('/cart')
            this.shepherdService.next()
          }
        }
      ],
      classes: '',
      highlightClass: "highlight",

    }, {
      id: "example-step5",
      title: "Step 5",
      text: "Hanwen's demo5",
      attachTo: {
        element: ".example-step5", on: 'bottom' as const,
        // on: "bottom"
      },
      buttons: [
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
      id: "example-step6",
      title: "Step 6",
      text: "Hanwen's demo6",
      attachTo: {
        element: ".example-step6", on: 'bottom' as const,
        // on: "bottom"
      },
      buttons: [
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

