const countryp = document.getElementById("cc");

const url = "https://ipapi.co/json";

const fetchLocation = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const country_code = await data.country_code;
  console.log(country_code);

  if (country_code == "IN") {
    countryp.innerHTML = `<img src = "./images/india.png">`;
  } else if (country_code == "US") {
    countryp.innerHTML = `<img src = "./images/united-states.png">`;
  }

}

fetchLocation()