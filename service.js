"use strict";

function DisplayData($http){
  const getPosts = () =>{
    return $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/aww.json'
    }).then((response) =>{
      return response;
    }, (error) => {
      console.log(error);
    });
  };


  return {
    getPosts
  };

};

//do i actually need this $inject? My page works with or without this.
// DisplayData.$inject = ["$http"];

angular
  .module("app")
  .factory("DisplayData", ["$http", DisplayData]);