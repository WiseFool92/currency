import { Currency } from './currency';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $('#btnLocation').click(function() {

    (async () => {
      let usd = new Currency();
      const response = await usd.getCurrency();
      getElements(response);
    })();

    function getElements(response) {
      console.log(response)
      if (response) { 
        $('.showOutput').html(`${response.AED}`);
      } else {
        $('.showOutput').html(`Apologies there was an error trying to display your exchange.`);
      }
    }
  });
});