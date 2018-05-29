"use strict";

function DisplayData($http){
  const getPosts = () =>{
    let redditPosts = {};
    return $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/aww.json'
    }).then((response) =>{
      redditPosts = response;
      return redditPosts;
    }, (error) => {
      console.log(error);
    });
  };

  return {
    getPosts
  };

};

//question: do i actually need this $inject? My page works with or without this.
//answer: this is one way to inject, technically, but when you minifiy or concatenate you are at high risk for errors with the injected data.

// DisplayData.$inject = ["$http"];

angular
  .module("app")
  .factory("DisplayData", ["$http", DisplayData]);