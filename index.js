

console.log("hi");
// document.getElementById("myBtn").addEventListener("click", myFunction);


console.log("hi");

var dd = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
	
}


function myFunction() {
	
	pdfMake.createPdf(dd).download();
   
}
  


