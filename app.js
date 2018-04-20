var app =angular.module("hangmanApp",[]);
app.controller("gameController",['$scope', function($scope){

var words = ["rat","cat","bat","mat"];
$scope.incorrectLettersChosen=[];
$scope.correctLettersChosen=[];
$scope.gusses = 6;
$scope.displayedWord ="";
$scope.input = {
	letter :""
}

var selectRandomWord = function(){
	var index = Math.round(Math.random()*words.length);
	return words[index];
}

var newGame = function(){
	$scope.incorrectLettersChosen = [];
	$scope.correctLettersChosen=[];
	$scope.gusses = 6;
	$scope.displayedWord ="";

	var selectedWord = selectRandomWord();
	// console.log(selectedWord);
	var tempDisplayedWord = "";
	for (var i = 0; i < selectedWord.length; i++) {
		tempDisplayedWord += "*";
	}
	$scope.displayedWord=tempDisplayedWord;
	console.log(tempDisplayedWord);
}

$scope.letterChosen = function(){
	//console.log("working");
	for (var i = 0; i < $scope.correctLettersChosen.length; i++) {
		if($scope.correctLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.input.letter="";
			return;
		}
	}

	for (var i = 0; i < $scope.inCorrectLettersChosen.length; i++) {
		if($scope.inCorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.input.letter="";
			return;
		}
	}
}

newGame();
}]);