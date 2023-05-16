const input = 'Eden Yemane Kifle';
const vowels = ['a','e','i','o','u'];
const resultArray = [];
for(let inputIndex=0; inputIndex<input.length;inputIndex++){
   // console.log(input[inputIndex]);
   for(let vowelIndex=0; vowelIndex<vowels.length; vowelIndex++){
    //console.log(vowels[vowel]);
    if(input[inputIndex]==='e'){
        resultArray.push(input[inputIndex]);
    }
    if(input[inputIndex]===vowels[vowelsIndex]){
        //console.log(input[inputIndex]);
        resultArray.push(input[inputIndex]);
    }
   }
}
//console.log(resultArray);