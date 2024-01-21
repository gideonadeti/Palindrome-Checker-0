// Attach event listener to the window's 'load' event to ensure DOM is ready
window.addEventListener('load', () => {
    // Attach 'click' event listener to the button
    document.getElementById('check-btn').addEventListener('click', checkPalindrome);
});

// Function to check if a given text is a palindrome
const checkPalindrome = () => {
    const userInput = document.getElementById('text-input').value;

    // Check if the input is empty
    if (userInput.trim() === '') {
        alert('Please input a value');
        return; // Exit the function if the input is empty
    }

    const regex = /[^\w]|_/g;
    const processedInput = userInput.replace(regex, ''); // Remove non-alphanumeric characters and underscores
    const userInputLowerCase = processedInput.toLowerCase();
    const reversedInput = userInputLowerCase.split('').reverse().join('');

    const resultArea = document.getElementById('result');
    if (userInputLowerCase === reversedInput) {
        resultArea.innerHTML = `<strong>${userInput}</strong> is a palindrome.`;
    } else {
        resultArea.innerHTML = `<strong>${userInput}</strong> is not a palindrome.`;
    }
};
