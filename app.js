const form = document.querySelector("form");
const input = document.querySelector("form #input-alani");

console.log(input);

//burda klavyeden enter ile de event çalışır.(bu özellik form un ıcınde type'ı submit olan bi buton old. için (click olsaydıda enter la calısırdı))
form.addEventListener("submit", (e) => {
  e.preventDefault();

  getData();
  //input.value = "";
  //e.target.reset();
  //form.reset();

  e.currentTarget.reset();

  console.log(e.target);
});

// async bir fknin asekron old. belirtmek için kullanılır
//declarationda fks nin basına async tanımlanır. async function name(p){}
//expression da const getData=async function(){}

const getData = async () => {
  const API_KEY = "10304b3762d1eef7461025f88fc57a0e";
  const cityName = input.value;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`;

  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();
    // console.log(data);
    // console.log(data.name);

    weatherDataDom(data);
  } catch (error) {
    console.log("hata");
  }
};
const weatherDataDom = (x) => {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity },
    weather: [{ main, description, icon }],
    wind: { speed },
  } = x;
  console.log(x);

  //console.log(x.weather[0].main); //destructiring yapmasaydım bu şekilde yapabılırıdk

  //DOMA YAZDIR;
  const container = document.querySelector(".container");
  container.innerHTML = `
  <div class="card  w-75 mb-3 ">
  <!--* Resim Alanı -->
  <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="card-img-top mx-auto icon-img" alt="...">
  <!--* Şehir-Ulke-Alani -->
  <div class="card-body">
    <h2 class="card-title " id="şehir-adi">${name} </h2><span class="ülke" id="ülke">${country}</span>
  </div>
  <ul class="list-group list-group-flush h3">
    <li class="list-group-item ">
        <div class="div">
              <p class="hava-durumu-derece"> <span id="derece" class="h1">${temp} </span></p> &#8451;
       </div>
    </li>
    <li class="list-group-item">
  <div class="hava-nasil mt-3">
        <p class="hava-nasil-text text-capitalize" id="hissedilen-hava">${feels_like}</p>
  </div>
  </li>
    <li class="list-group-item">
        <div class="div">
              <p class="hava-durumu-derece"> <span id="hissedilen-derece" class="h1"> ${description} </span></p> &#8451;
       </div>
    </li>
  </ul>
  
  <div class="card-body d-flex justify-content-between border  p-4 ">
  <div class="rüzgar-hizi d-flex align-items-center gap-1 ">
  <img src="images/rüzgar.png" alt="" width="40%" class="mt-4">
               <div class=" mt-4">
                     <div class="d-flex align-items-center">
                          <span class="wind h1" id="rüzgar-hizi">${speed} </span> <strong class="h3 mx-2">km/h</strong>
                    </div>
               </div>
  
              </div>
  
  <div class="nem-durumu d-flex align-items-center mx-5  gap-1 ">
  <img src="images/nem.jpg" alt="" width="50%" class="mt-4 ">
  
        <div class="d-flex mt-4">
              <span class="wind h1" id="nem-orani">${humidity}</span> <span class="h1">%</span>
        </div>
  </div>
  
  </div>
  
  </div>`;
};
