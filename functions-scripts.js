function animalTester(userName){
  var argLength = arguments.lenth;
  var otherArgs = [];
  if(argLength > 1){
    for (var i = 0, ,i < argLength; i++){
      otherArgs.push(arguments[i]);
    }
  }
return{
  'userName': userName;
  'otherArgs': otherArgs
};
}
