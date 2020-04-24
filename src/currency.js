export class Currency {
  async getCurrency() {
    try {
      let response = await fetch('https://cors-anywhere.herokuapp.com/https://prime.exchangerate-api.com/v5/0ddb9b5538b69fc37f389c8b/latest/USD&appid=${process.env.API_KEY}');
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}