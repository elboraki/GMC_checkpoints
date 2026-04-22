

// 1) Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// 2) Ticket Pricing
function getTicketPrice(age) {
  if (age <= 12) {
    return `Age ${age}: Ticket price is $10.`;
  } else if (age >= 13 && age <= 17) {
    return `Age ${age}: Ticket price is $15.`;
  } else {
    return `Age ${age}: Ticket price is $20.`;
  }
}

// 3) Weather Clothing Adviser
function weatherAdviser(temperature, isRaining) {
  let advice = "";

  if (temperature < 10) {
    advice = "Wear a heavy jacket";
  } else if (temperature >= 10 && temperature < 20) {
    advice = "Wear a sweater or light jacket";
  } else {
    advice = "Wear light clothes";
  }

  if (isRaining) {
    advice += " and take an umbrella.";
  } else {
    advice += ".";
  }

  return advice;
}

// Example switch case
function dayType(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return "Weekend";
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    default:
      return "Invalid day";
  }
}

// ================================
// Recursion
// ================================

// 4) Fibonacci Sequence
function fibonacci(n) {
  if (n < 0) {
    return "Invalid input";
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 5) Palindrome Checker
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  function check(s, left, right) {
    if (left >= right) return true;
    if (s[left] !== s[right]) return false;
    return check(s, left + 1, right - 1);
  }

  return check(cleaned, 0, cleaned.length - 1);
}

// 6) Power Function
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / power(base, -exponent);
  return base * power(base, exponent - 1);
}

// ================================
// Test Output
// ================================

console.log("=== Decision Making ===");
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

console.log(getTicketPrice(10));
console.log(getTicketPrice(15));
console.log(getTicketPrice(25));

console.log(weatherAdviser(8, true));
console.log(weatherAdviser(16, false));
console.log(weatherAdviser(28, true));

console.log(dayType("Monday"));
console.log(dayType("Sunday"));

console.log("\n=== Recursion ===");
console.log(`Fibonacci(6) = ${fibonacci(6)}`);
console.log(`Fibonacci(8) = ${fibonacci(8)}`);

console.log(`"madam" palindrome? ${isPalindrome("madam")}`);
console.log(
  `"A man, a plan, a canal, Panama" palindrome? ${isPalindrome("A man, a plan, a canal, Panama")}`
);
console.log(`"hello" palindrome? ${isPalindrome("hello")}`);

console.log(`2^3 = ${power(2, 3)}`);
console.log(`5^2 = ${power(5, 2)}`);
console.log(`2^-2 = ${power(2, -2)}`);