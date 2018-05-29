"use strict";

function DisplayData($http){
  let finalData = {};
  const getData = () =>{
    return $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/aww.json'
    }).then((response) =>{
      finalData = response;
      return response;
    }, (error) => {
      console.log(error);
    });
  };

  const returnResults = () => { return finalData; };

  return {
    returnResults, 
    getData
  };

};

DisplayData.$inject = ["$http"];

angular
  .module("app")
  .factory("DisplayData", ["$http", DisplayData]);