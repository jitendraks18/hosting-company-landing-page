const bashm = document.querySelector("span.basicshared.monthly");
const basha = document.querySelector("span.basicshared.annually");
const proshm = document.querySelector("span.proshared.monthly");
const prosha = document.querySelector("span.proshared.annually");
const mshm = document.querySelector("span.mshared.monthly");
const msha = document.querySelector("span.mshared.annually");
const baclm = document.querySelector("span.basiccloud.monthly");
const bacla = document.querySelector("span.basiccloud.annually");
const proclm = document.querySelector("span.procloud.monthly");
const procla = document.querySelector("span.procloud.annually");
const mclm = document.querySelector("span.mcloud.monthly");
const mcla = document.querySelector("span.mcloud.annually");

const url = "https://ipapi.co/json";
const fetchLocation = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const country_code = await data.country_code;
  console.log(country_code);

  // for setting price in dollars or inr

  if (country_code == "IN") {
    bashm.innerHTML = "&#8377;200";
    basha.innerHTML = "&#8377;2000";

    proshm.innerHTML = "&#8377;400";
    prosha.innerHTML = "&#8377;4000";

    mshm.innerHTML = "&#8377;600";
    msha.innerHTML = "&#8377;6000";

    baclm.innerHTML = "&#8377;1000";
    bacla.innerHTML = "&#8377;10000";

    proclm.innerHTML = "&#8377;1500";
    procla.innerHTML = "&#8377;15000";

    mclm.innerHTML = "&#8377;2000";
    mcla.innerHTML = "&#8377;20000";
  } else if (country_code == "US") {
    bashm.innerHTML = "&dollar;2.5";
    basha.innerHTML = `&dollar;27`;

    proshm.innerHTML = "&dollar;5";
    prosha.innerHTML = "&dollar;50";

    mshm.innerHTML = "&dollar;7";
    msha.innerHTML = "&dollar;70";

    baclm.innerHTML = "&dollar;12";
    bacla.innerHTML = "&dollar;120";

    proclm.innerHTML = "&dollar;20";
    procla.innerHTML = "&dollar;200";

    mclm.innerHTML = "&dollar;26";
    mcla.innerHTML = "&dollar;260";
  }
};

fetchLocation();

// for toogling

// this for pricing section.

const shared = document.getElementById("shared");
const sharedPlan = document.querySelector(".sharedplan");
const cloud = document.getElementById("cloud");
const cloudPlan = document.querySelector(".cloudplan");

cloud.addEventListener("click", function () {
  shared.classList.remove("active");
  cloud.classList.add("active");
  sharedPlan.classList.add("hidden");
  cloudPlan.classList.remove("hidden");
});

shared.addEventListener("click", function () {
  shared.classList.add("active");

  cloud.classList.remove("active");

  sharedPlan.classList.remove("hidden");
  cloudPlan.classList.add("hidden");
});

const toggle = document.getElementById("toggle");
const flexy = document.getElementById("flexy");
const flexyy = document.getElementById("flexyy");

const jmonthly = document.querySelector("span.j-monthly");
const jannually = document.querySelector("span.j-annually");

toggle.addEventListener("change", (e) => {
  flexy.classList.toggle("show-monthly");
  flexyy.classList.toggle("show-monthly");
  jannually.classList.toggle("display-bold");
  jmonthly.classList.toggle("display-bold");
});
