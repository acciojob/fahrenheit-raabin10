function toFahrenheit(celsius) {
  if (celsius < -273.15 || celsius > 1.8e9) {
    return "Invalid input. Temperature out of range.";
  }

  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(2);
}

// Test cases
console.log(toFahrenheit(0));    // Output: 32.00
console.log(toFahrenheit(25));   // Output: 77.00
console.log(toFahrenheit(-10));  // Output: 14.00

// Prompt user for input
const celsiusInput = prompt("Enter Celsius: ");
alert(toFahrenheit(Number(celsiusInput)));
