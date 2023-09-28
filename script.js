function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
/* Se quiser que a imagem tambem mude quando alternar entre light/dark mode
   
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/2500.webp")
    img.setAttribute("alt", "Gato de botas imponente")
  } else {
    img.setAttribute("src", "./assets/maxresdefault.jpg")
  }
  */
}
/* alternativa para o toggle
if (html.classList.contains("light")) {
  html.classList.remove("light")
} else {
  html.classList.add("light")
}*/
