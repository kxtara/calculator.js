# Calculator with JavaScript
 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  <!-- - [Links](#links) -->
<!-- - [My process](#my-process) -->
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  <!-- - [Continued development](#continued-development) -->
  - [Useful resources](#useful-resources)
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview

Testing my JavaScript skills by creating a calculator.

### The challenge

- Build out functional calculator

### Screenshot

![ScreenShot](https://raw.github.com/kxtara/calculator-js/main/images/calc.png)


<!-- ### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

<!-- ## My process -->



### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow

### What I learned

I've learned to use CSS Grid & the forEach() method.
```css
.container {
  display: grid;
  border-radius: 4%;
  padding: 1.5rem;
  background-color: black;
  align-content: center;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  gap: 7px;
  box-shadow: 0px 0px 9px 2px #FF9500;
}
```
```js
button.forEach(button => {
    button.addEventListener('click',event => {
        test = total.textContent += button.value
    })
});
```



<!-- ### Continued development -->




### Useful resources

- [Open AI](https://chat.openai.com/) - This helped me with explaining different methods in JavaScript.

## Author

- Twitter - [@kiarahoheb](https://www.twitter.com/kiarahoheb)