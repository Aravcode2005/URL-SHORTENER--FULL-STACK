function f(s) {
  let protocol = "";
  for (let i = 0; i < 7; i++) {
    protocol += s[i];
  }

  const n = length(protocol);
  if (protocol != "https//:") {
    for (let i = 0; i < n; i++) {
      console.log(protocol[i]);
    }
    return "Invalid protocol";
  }
  let stri = "";
  for (let i = 8; i <= length(s) - 3; i++) {
    stri += s[i];
  }
  stri += String(Math.random() * 10);
  return stri;
}
const url = document.getElementById("urlShortener");
const clickbutton = document.getElementById("buttonShortener");
clickbutton.addEventListener("click", function (event) {
  const s = f(url);
  console.log(s);
});
