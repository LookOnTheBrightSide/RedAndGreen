//var result = helloWorld();
//var expectedResult = "hello world";

var assert = {
	equals: function(expectedResult, result){
					var rg = new RedOrGreen();
					if(result === expectedResult){
						rg.makeGreen();
					} else if(result !== expectedResult){
						rg.makeRed();
					}
				}
};

var TestMyCode = {
	run: function(testName, funcToBeExc){
		this.testName = testName;
		funcToBeExc(assert);
	}
};


