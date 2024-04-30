var containsDuplicate = function(nums) {
    let hash = {};
    for (let num of nums) {
      if (hash[num]) {
        return true; // If the number is already in hash, it's a duplicate
      } else {
        hash[num] = true; // Store the number in hash
      }
    }
    return false; // If no duplicates found
  };
  
  function handleDuplicate() {
    const input = document.getElementById("intervalsInput").value;
    // Parse input as an array of numbers
    const nums = input.match(/\d+/g).map(Number); // Extract numbers from input
    const result = containsDuplicate(nums);
    document.getElementById("output").innerText = result ? "true" : "false";
  }
  
  document.getElementById("submit").addEventListener("click", handleDuplicate);
  
  document.getElementById("intervalsInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      handleDuplicate();
    }
  });
  
  // Add this script to clear the input field on page load
  document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });