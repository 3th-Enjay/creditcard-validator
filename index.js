

/**
 * @param {string} 
 * @returns {boolean} -
 */
function isVisaCard(cardNumber) {
    
    const cleaned = cardNumber.replace(/\D/g, '');
    const visaRegex = /^4\d{12}(\d{3})?$/;
    return visaRegex.test(cleaned);
  }
  
  // Example usage:
  const cardNumber1 = "4136 1825 1789 0119"; 
  const cardNumber2 = "4136182517890";         
  const cardNumber3 = "5136 1825 1789 0119"; // Not a Visa 
  
  console.log(`Card Number: ${cardNumber1} -> isVisa: ${isVisaCard(cardNumber1)}`); // true
  console.log(`Card Number: ${cardNumber2} -> isVisa: ${isVisaCard(cardNumber2)}`); // true
  console.log(`Card Number: ${cardNumber3} -> isVisa: ${isVisaCard(cardNumber3)}`); // false
  