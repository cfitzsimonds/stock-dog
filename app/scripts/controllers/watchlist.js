'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope, $routeParams, $modal, WatchlistService, CompanyService) {
    // Initializations
    $scope.companies = CompanyService.query();
    /*
    $scope.companies = [
    {
        "label": "AAPL - Apple Inc.",
        "name": "Apple Inc.",
        "symbol": "AAPL",
        "sector": "Technology",
        "industry": "Computer Manufacturing"
    },
    {
        "label": "TFSC - 1347 Capital Corp.",
        "name": "1347 Capital Corp.",
        "symbol": "TFSC",
        "sector": "Finance",
        "industry": "Business Services"
    },
    {
        "label": "TFSCR - 1347 Capital Corp.",
        "name": "1347 Capital Corp.",
        "symbol": "TFSCR",
        "sector": "Finance",
        "industry": "Business Services"
    },
    {
        "label": "TFSCU - 1347 Capital Corp.",
        "name": "1347 Capital Corp.",
        "symbol": "TFSCU",
        "sector": "n/a",
        "industry": "n/a"
    }];
    */
    $scope.watchlist = WatchlistService.query($routeParams.listId);
    $scope.stocks = $scope.watchlist.stocks;
    $scope.newStock = {};
    var addStockModal = $modal({
      scope: $scope,
      template: 'views/templates/addstock-modal.html',
      show: false
    });

    $scope.showStockModal = function () {
      addStockModal.$promise.then(addStockModal.show);
    };

    $scope.addStock = function () {
      $scope.watchlist.addStock({
        listId: $routeParams.listId,
        company: $scope.newStock.company,
        shares: $scope.newStock.shares
      });
      addStockModal.hide();
      $scope.newStock = {};
    };
  });
