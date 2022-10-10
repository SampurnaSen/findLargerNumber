/**
 * This function compares two numbers
 * @param {*} num1 
 * @param {*} num2 
 * @returns the larger number
 */
function greatestOfTwo( num1, num2 ) { 
	if ( num1 > num2 ) {
		return num1; 
   } else {
		return num2; 
  }
}

/**
 * This function runs each time the button is clicked
 */
function feedTheButton() {
	// get the two numbers from the text input fields
	// parseInt() changes string to number 
	let num1 = parseInt(document.getElementById("firstNum").value);
  let num2 = parseInt(document.getElementById("secondNum").value);

  // run the function greatestOfTwo and store what is returned in the variable result 
  let result = greatestOfTwo( num1, num2 );

  // write the result into the HTML
  let outputValue = document.getElementById("largerNum");
  outputValue.innerHTML = result;
}
