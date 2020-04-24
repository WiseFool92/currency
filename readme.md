# _Currency-Exchanger_

#### April 24rd, 2020

## Description

_This program creates a money converter_

_This site is already linked to an index.html, styles.css, jQuery.js(3.4.1), scripts.js., main.js, jest, babel, lint, webpack, json, & gitignore_

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Click the green 'Clone or Download' button and copy the link / download the zip
2. Open terminal and type... or skip to the 2nd #3 if you downloaded the zip

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```
3. If you downloaded the zip then extract all onto your desktop
4. Open your the folder with VSC or an equivalent
5. Run _$ npm install_
6. Run _$ npm run build_
7. Run _$ npm run start_
8. Enjoy

## Specs

### Behavior Driven Development Spec List
#### Currency Exchanger
|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| The user enters an amount of USD | '$1 USD' | '$1 USD'  |
| The program uses a drop down menu for currency chocies | 'select from dropdown' | 'Convert it' |
| The user selects a currency to exchange it with  | 'Euro' | '.93 Euro' |
| The user has multiple currency options | 'Euro', 'Swiss Franc', 'Pound Sterling', 'Russian Ruble', 'Danish Krone' | '.93', '.98', '.81', '74.69', '6.91' |
| The program will notify the user with any error mesages | '$5 USD to Swiss Franc' | 'API Error: Check URL' , 'API Error: Check Key' |
| The program will notify the user when a conversion isnt supported | '$5 USD to Uruguayan Peso' | 'Conversion Error: Check if Conversion is Supported' |
| The program is able to convert between all avaliable currencies | 'Anything on the API list' | 'Converts it from USD' |
| The program can convert from currencies other than USD | 'Selects from dropdown' | 'Converts it' |
| The program uses session storage and only makes one API call per user session | 'One API Call' | 'Access to all conversion functionality' |




---
## Known Bugs

_N/A_ - 4/24/2020

## gh-pages

WiseFool92.github.io/currency-exchanger

## Support

_Email: watkins92@gmail.com_

---
## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
- [jQuery](https://jquery.com/) - Used to interact with the DOM
- [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling

## Useful tools

- [free icons @ icons8](https://icons8.com/)
- [free icons @ fontawesome](https://fontawesome.com/)

---

- [Old School Gifs Search](https://gifcities.org/)
- [free images @ unsplash](https://unsplash.com/)

  - **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

  - _https://source.unsplash.com/400x400/?cat_
  - http://unsplash.it/500/500 - This will just return a random image the size of 500x500

---

- [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
- [CSS Grid Cheat Sheet](http://grid.malven.co/)

---

- [CSS Gradient BG Generator](https://mycolor.space/gradient)
- [CSS Basic Gradient Generator](https://cssgradient.io/)

---

- [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

### License

This project is licensed under the MIT License

Copyright (c) 2020 **_Nathan Watkins-Hoagland_**
