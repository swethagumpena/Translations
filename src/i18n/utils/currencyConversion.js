/* eslint-disable import/prefer-default-export */
export const currencyConversion = (value, locale) => {
  switch (locale) {
    case 'GBP':
      return value * 0.0098;
    case 'EUR':
      return value * 0.011;
    default:
      return value; // INR
  }
};
