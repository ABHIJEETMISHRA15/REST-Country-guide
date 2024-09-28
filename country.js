const countryName = new URLSearchParams(location.search).get('name');
const flagimg=document.querySelector('.country-details img');
const cnName=document.querySelector('.details-text-container h1');
const nativeName=document.querySelector('.nativeName');
const population=document.querySelector('.population');
const region=document.querySelector('.region');
const capital=document.querySelector('.capital');
const topD=document.querySelector('.topD');
const currency=document.querySelector('.currency');
const lang=document.querySelector('.lang');
const borCountries=document.querySelector('.border-countries');

const themeChanger=document.querySelector(".theme-changer");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>(res.json())
    .then((data)=>{
        flagimg.src=data[0].flags.svg;
        flagimg.alt=data[0].name.common;
        cnName.innerText=data[0].name.common;
        if(data[0].name.nativeName){
            nativeName.innerText=Object.values(data[0].altSpellings[0]);
        }
        else{
            data[0].name.common;
        }
        population.innerText=data[0].population.toLocaleString('en-IN');
        region.innerText=data[0].region;
        capital.innerText=data[0].capital?.[0];
        topD.innerText=data[0].tld.join(', ');
        if(data[0].currencies){
            currency.innerText=Object.values(data[0].currencies).map((currency) => currency.name).join(', ');
        }
        if(data[0].languages){
            lang.innerText=Object.values(data[0].languages).join(', ');
        }

        if(data[0].borders){
            data[0].borders.forEach((border)=>{
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res)=>res.json())
                .then(([brcountry])=>{
                    const brcountrytag=document.createElement('a');
                    brcountrytag.innerText=brcountry.name.common;
                    brcountrytag.href=`country.html?name=${brcountry.name.common}`;
                    borCountries.append(brcountrytag);
                })
            })
        }
    })
);
let theme = "light";
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