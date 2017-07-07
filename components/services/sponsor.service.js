(function(){
  'use strict'
  angular
  .module('myApp')
  .service('sponsorService', sponsorService);

  function sponsorService(){
    var sponsors = [];
    var publicAPI = {
      setSponsors : _setSponsors,
      getSponsors: _getSponsors,
      updateSponsor: _updateSponsor
    };
    return publicAPI;

    function _setSponsors(pSponsors){
        var sponsorList = _getSponsors();

        sponsorList.push(pSponsors);
        localStorage.setItem('lsSponsorList', JSON.stringify(sponsorList));
      }

    function _getSponsors(){
    var sponsorList = JSON.parse(localStorage.getItem('lsSponsorList'));
    if(sponsorList == null){
      sponsorList = sponsors;
    }
    return sponsorList;
  }

  function _updateSponsor(pSponsorModified){
      var sponsorList = _getSponsors();
      for(var i = 0; i < sponsorList.length; i++){
        if(sponsorList[i].name === pSponsorModified.name){
          sponsorList[i] = pSponsorModified;
        }
      }
      localStorage.setItem('lsSponsorList', JSON.stringify(sponsorList));
    }

  }
})();
