

//Create clock
	var time = 30;
	setInterval(count, 1000);
	function count(){
		time = time - 1
		if (time <= 0){
			alert("Time's up! Here's ten more seconds!");
			time = 10;
		}
		var timer = $("#timer");
		timer.text("Time Remaining: " + time + " seconds")
	}




var answerOne = 2
var answerTwo = 2
var answerThree = 2



var firstQuestion = $("#q1")
					.children()
			        .eq(0)
			        .children("tr")
			        .eq(0)
			        .children("td")

var secondQuestion = $("#q2")
					.children()
			        .eq(0)
			        .children("tr")
			        .eq(0)
			        .children("td")

var thirdQuestion = $("#q3")
					.children()
			        .eq(0)
			        .children("tr")
			        .eq(0)
			        .children("td")				       		        
			   


function unSelectFirst(){
	for (i=0;i<12;i++){
		firstQuestion.eq(i).attr("class","unselected")
	}
}
function unSelectSecond(){
	for (i=0;i<12;i++){
		secondQuestion.eq(i).attr("class","unselected")
	}
}
function unSelectThird(){
	for (i=0;i<12;i++){
		thirdQuestion.eq(i).attr("class","unselected")
	}
}

function checkDone(){
	if (answerOne !== 2 && answerTwo !== 2 && answerThree !== 2) {
		document.write("Thank you for your response!")
	}
}


firstQuestion.eq(0).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(0).attr("class","selected")
	console.log(answerOne);
	checkDone()

});
firstQuestion.eq(1).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(1).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(2).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(2).attr("class","selected")
	console.log(answerOne);
	checkDone()
});	
firstQuestion.eq(3).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(3).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(4).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(4).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(5).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(5).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(6).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(6).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(7).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(7).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(8).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(8).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(9).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(9).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(10).click(function(){
	answerOne = 0;
	unSelectFirst()
	firstQuestion.eq(10).attr("class","selected")
	console.log(answerOne);
	checkDone()
});
firstQuestion.eq(11).click(function(){
	answerOne = 1;
	unSelectFirst()
	firstQuestion.eq(11).attr("class","selected")
	console.log(answerOne);
	checkDone()
});



secondQuestion.eq(0).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(0).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(1).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(1).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(2).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(2).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(3).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(3).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(4).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(4).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(5).click(function(){
	answerTwo = 1;
	unSelectSecond()
	secondQuestion.eq(5).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(6).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(6).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(7).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(7).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(8).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(8).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(9).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(9).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});
secondQuestion.eq(10).click(function(){
	answerTwo = 0;
	unSelectSecond()
	secondQuestion.eq(10).attr("class","selected")
	console.log(answerTwo);
	checkDone()
});




thirdQuestion.eq(0).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(0).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(1).click(function(){
	answerThree = 1;
	unSelectThird()
	thirdQuestion.eq(1).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(2).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(2).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(3).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(3).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(4).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(4).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(5).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(5).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(6).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(6).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(7).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(7).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(8).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(8).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(9).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(9).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(10).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(10).attr("class","selected")
	console.log(answerThree);
	checkDone()
});
thirdQuestion.eq(11).click(function(){
	answerThree = 0;
	unSelectThird()
	thirdQuestion.eq(11).attr("class","selected")
	console.log(answerThree);
	checkDone()
});






