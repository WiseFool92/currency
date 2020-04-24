import { Currency } from './currency'
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $('#btnLocation').click(function(event) {
    event.preventDefault();
   (async () => {
     let usd = new Usd();
     const response = await usd.getCurrency();
     getElements(response);
   })();

   function getElements(response) {
     if (response) {
       $('.showOutput').html('${response}');
     } else {
       $('.showOutput').html('Apologies there was an error trying to display your exchange.');
     }
   }
});