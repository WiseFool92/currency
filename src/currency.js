export class Currency {
  async getCurrency() {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/https://prime.exchangerate-api.com/v5/latest/USD&appid=${process.env.API_KEY}`);
      console.log(response)
      let jsonifiedResponse;
      console.log(response)
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}