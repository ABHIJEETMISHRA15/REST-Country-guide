const countryContainer = document.querySelector(".country-container");
const searchContainer=document.querySelector(".search-container input");
const themeChanger=document.querySelector(".theme-changer");
let allCountry;

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        renderCountries(data);
        allCountry=data;
})

function renderCountries(data){
    countryContainer.innerHTML=''
    data.forEach((country) => {
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href=`
        /REST-Country-guide/country.html?name=${country.name.common}`
        const cardHTML = `
                 <img src=${country.flags.svg} alt="${country.name.common}">
                    <div class="card-text">
                        <h3 card-title>${country.name.common}</h3>
                        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital: </b>${country.capital}</p>
                    </div>
`
        countryCard.innerHTML = cardHTML;
        countryContainer.append(countryCard);
    })
}

searchContainer.addEventListener('input',(e)=>{
    const search=allCountry.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    renderCountries(search);
})
let theme="";
themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if (themeChanger.innerHTML === '<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode') {
        themeChanger.innerHTML = '<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode';
        localStorage.setItem("theme","dark");
      } else {
        themeChanger.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode';
        localStorage.setItem("theme","");
      }    
})

window.onload=themeChecker();
function themeChecker(){
    document.body.className=localStorage.getItem("theme");
    if (document.body.className === "dark") {
        themeChanger.innerHTML = '<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode';
      } else {
        themeChanger.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode';
      } 
}
