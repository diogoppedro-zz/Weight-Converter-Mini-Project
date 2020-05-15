document.getElementById("output").style.visibility = "hidden";

// Event listener from Input
lbsInput.addEventListener("input", function (e) {
  // Show the results when typing start
  document.getElementById("output").style.visibility = "visible";

  //store the value captured by the event into variable for later calculation
  var lbs = e.target.value;

  //grab
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.205;
  document.getElementById("ozOutput").innerHTML = lbs / 16;
});
