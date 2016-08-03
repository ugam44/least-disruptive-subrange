(function () {
  var print = function (text) {
  	document.getElementById("resultsContainer").innerHTML += (text + "<br/>");
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getRandomArray = function (min, max) {
    var minLength = min || 0;
    var maxLength = max || 1000;
  	var arrLen = getRandomInt(minLength, maxLength);
    var randomArray = [];
    for (var i = 0; i < arrLen; i++) {
    	randomArray[i] = getRandomInt(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    return randomArray;
  };

  var printResults = function (results) {
    print("<h2 style='margin-bottom: 0;'>Results:</h4>");
    print("<div><label>Smallest Distance Sum: </label><span>" +
        results.smallestDistanceSum +
        "</span><br/><label>Smallest Distance Sum Index: </label><span>" +
        results.smallestDistanceSumIndex + "</span><br/></div><hr/>"
    );
  };

  var findBestFittingSubrange = function (original, replacement) {
    if (!original || !replacement ||
    !original.length || !replacement.length) {
    	return({smallestDistanceSum: "NaN - Empty List Received", smallestDistanceSumIndex: "NaN - Empty List Received"});
    }
    var originalList = original.length >= replacement.length ? original : replacement;
    var replacementList = original.length >= replacement.length ? replacement : original;
    var currReplacementIndex = 0;
		var bestFit = {
    	smallestDistanceSum: Infinity,
      smallestDistanceSumIndex: -1
    };
    var maxIndex = originalList.length - replacementList.length;

    for (var currOrigIndex = 0; currOrigIndex <= maxIndex; currOrigIndex++) {
    	var displacement = 0;
      print("<br/>--- Checking Original Index " + currOrigIndex + " ---");
      for (var i = 0; i < replacementList.length; i++) {
      	displacement += Math.abs(originalList[i + currOrigIndex] - replacementList[i]);

      }
      print("Total Displacement: " + displacement);
      if (displacement < bestFit.smallestDistanceSum) {
        print("<span style='background-color: yellow'>*** New Smallest Distance Sum ***</span>");
      	bestFit.smallestDistanceSum = displacement;
        bestFit.smallestDistanceSumIndex = currOrigIndex;
      }
    }
    return (bestFit);
  };

  printResults(findBestFittingSubrange(getRandomArray(), getRandomArray()));
})();
