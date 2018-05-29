"use strict";

const awwComponent = {
  template: `
  <h1>Some reddit aww stuff</h1>
  
  <input ng-model="$ctrl.search" placeholder="search this reddit">

  <div ng-repeat="child in $ctrl.showResponse.data.data.children "> 
    <p>{{ child.data.title }}
      <br>
      <img src='{{ child.data.thumbnail }}'>
    </p>
    <a href=" {{child.data.url}}" target="_blank">
    Click to view larger image!
    </a>
  
 
  </div>
  `,

  controller: ["DisplayData", function(DisplayData){

    const vm = this;
    DisplayData.getData().then((response) => {
      console.log(response);
      vm.showResponse = response;
    })


  }]


}



angular 
  .module("app")
  .component("awwComponent", awwComponent);