angular.module('quoteApp').controller('quoteCtrl', function($scope, quoteServices){
    $scope.quotes = quoteServices.getQuotes();
    $scope.addNewQuote = function(quote, auth){
        quoteServices.addQuote(quote, auth)
        $scope.newQuote =""
        $scope.newAuthor = ""
    }
})
