(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('sponsorController', sponsorController);
    sponsorController.$inject = ['sponsorService'];
    function sponsorController(sponsorService) {

      var vm = this;

      function init() {
        vm.sponsors = sponsorService.getSponsors();
        vm.sponsor = {};
      }init();

      vm.save = function(pNewSponsor){
        
        sponsorService.setSponsors(pNewSponsor);
        vm.sponsor = {};
        clean();
        init();
      }

      vm.getInfo = function(pSponsor){
        vm.sponsor.name = pSponsor.name;
        vm.sponsor.typeSponsor = pSponsor.typeSponsor;
        vm.sponsor.photo = pSponsor.photo;
        vm.sponsor.typeCoin = pSponsor.typeCoin;
        vm.sponsor.foodProducts = pSponsor.foodProducts;
        vm.sponsor.quantityFood = pSponsor.quantityFood;
        vm.sponsor.equivalenceFood = pSponsor.equivalenceFood;
        vm.sponsor.equipment = pSponsor.equipment;
        vm.sponsor.quantityEquipment = pSponsor.quantityEquipment;
        // vm.sponsor.photo = pSponsor.photo;
      }

      vm.update = function(){
      var sponsorEdited = {
          name: vm.sponsor.name,
          typeSponsor: vm.sponsor.typeSponsor,
          photo: vm.sponsor.photo,
          typeCoin: vm.sponsor.typeCoin,
          foodProducts: vm.sponsor.foodProducts,
          quantityFood: vm.sponsor.quantityFood,
          equivalenceFood: vm.sponsor.equivalenceFood,
          equipment: vm.sponsor.equipment,
          quantityEquipment: vm.sponsor.quantityEquipment
          // photo: vm.sponsor.photo
        }
        sponsorService.updateSponsor(sponsorEdited);
        clean();
        init();
      }

      function clean(){
        vm.sponsor = {}
      }

    }
})();
