import $ from 'jquery';
import './styles.css';
import { Currency } from './currency';


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
      if (response.result === undefined) { 
        $('.showOutput').html(`<p>API ERROR: Check URL</p>${response}`);
      } else if (response.result === "error") {
        $('.showOutput').html(`<p>API ERROR: Check Key</p>${response}`);
      }
    }
  });
});