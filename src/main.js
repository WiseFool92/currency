import { Currency } from './currency';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $('#btnLocation').click(function() {
    event.preventDefault();

    (async () => {
      let change = new Currency();
      const response = await change.getCurrency();
      currencyChange(response);
    })();

    function currencyChange(response) {
      // console.log(response)
      if (response) { 
        $('.showOutput').html(`${response.AED}`);
      } else {
        $('.showOutput').html(`Apologies there was an error trying to display your exchange.`);
      }
    }
  });
});