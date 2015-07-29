angular.module('plunker', ['ui.bootstrap']);
function TypeaheadCtrl($scope) {

  $scope.Selected = undefined;
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
}