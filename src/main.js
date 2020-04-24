import $ from 'jquery';
import './styles.css';
import { Currency } from './currency';


$(document).ready(function() {
  $('#btnLocation').click(function() {
    event.preventDefault();

    const type = $("#type").val();
    const quid = $("#quid").val();

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
      } else if (response.result === "success" && response.conversion_rates[]) {
        let = response.conversion_rates[];
        $(".showOutput").html(`<p>API ERROR: </p>${response}`);
      }
    }
  });
});