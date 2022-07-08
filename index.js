const calculator = document.querySelector('#calculator');
const screen = document.querySelector('#result');
const themeBtn = document.getElementById('theme-btn');
const themeLink = document.getElementById('theme-link');



calculator.addEventListener('click', function (ev) {
   if (!ev.target.classList.contains('button')) return;

   const value = ev.target.innerText;

   switch (value) {
       case 'C':
           screen.innerText = '';
           break;
       case '=':
           if (screen.innerText.search(/[^0-9*/+-.]/mi) !== -1) return;
           screen.innerText = eval(screen.innerText);
           break;
       default:
           screen.innerText += value;
   }

})

themeBtn.addEventListener('click', function () {
    let lightTheme = 'styles/light.css';
    let darkTheme = 'styles/dark.css';

    let currentTheme = themeLink.getAttribute('href');
    let theme = '';

    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
        theme = 'dark';
    } else {
        currentTheme = lightTheme;
        theme = 'light';
    }

    themeLink.setAttribute('href', currentTheme);

})


