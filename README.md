## Welcome! 👋

Thanks for checking out this front-end coding project.

## The challenge

THe challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.
**To do this project, you need a good understanding of HTML, CSS, and JavaScript.**

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode 

### Links

- Live Site URL: [Add live site URL here](https://abhijeetmishra15.github.io/REST-Country-guide/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Working with RESTcountry API is an amazing journey. Real-time processing helps a lot in gaining knowledge about real world problems and it's way to solve such problems with time complexity. Local storage for state storing of dark and light theme helps to undestand how theme works in websites.

To see how you can add code snippets, see below:

```html
<span class="back-btn" onclick="history.back()"><i class="fa-solid fa-arrow-left">&nbsp;&nbsp;Back</i></span> 
```
```css
body{
    --background-color:#F6F5F2;
    --textcolor:black;
    --elementcolor:white;
    margin:0;
    background-color: var(--background-color);
    color: var(--textcolor);
}
body.dark{
    --background-color: hsl(207, 26%, 17%);
    --textcolor:white;
    --elementcolor:hsl(209, 23%, 22%);
}
```
```js
window.onload=themeChecker();
function themeChecker(){
    document.body.className=localStorage.getItem("theme");
    if (document.body.className === "dark") {
        themeChanger.innerHTML = '<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode';
      } else {
        themeChanger.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode';
      } 
}
```

### Continued development

Using JavaScript increases the repeatibility code factor in the project which is not open hearthly welcome in community. So looking forward to overcome such withh the JS framework React in the coming time.

### Useful resources

- [Anurag Singh](https://www.youtube.com/watch?v=QFeD8WuUSrc) - This channel helped me throughtout the project as a guide over the forthcoming problems.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - This is an amazing article which helped me finally understand local storage. I'd recommend it to anyone still learning this concept. In the project it helps to store the theme of the project between light and dark.

## Author

- Abhijeet Mishra

## Acknowledgments

I like to acknowledge some of the website like CssBattle.dev ,Grid garden for enchancing knowledge in CSS flex-box.MDN Webdocs for giving important tips of Local storage in JS.
