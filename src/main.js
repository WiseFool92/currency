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
      if (response.result === undefined) { 
        $('.showOutput').html(`<p>API Error: Check URL</p>${response}`);
      } else if (response.result === "error") {
        $('.showOutput').html(`<p>API Error: Check Key</p>${response.error}`);
      } else if (response.result === "success" && response.conversion_rates[quid]) {
        let globalExchange = response.conversion_rates[quid];
        let convert = (type * globalExchange).toFixed(2);
        $(".showOutput").html(convert + " " + quid);
      } else if (response.result === "success" && !response.conversion_rates[quid]) {
        console.log(response.result)
        $(".showOutput").html(`<p>Conversion Error: Check if Conversion is Supported</p>${response.error}`);
      } else {
        $(".showOutput").html(`<p>Unexpected Error: We appreciate your patience. Please submit a ticket and our teams will work to resolve this issue</p>`);
      }
    }
  });
});