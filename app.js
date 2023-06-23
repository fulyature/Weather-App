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

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}&lang=tr`;
};
