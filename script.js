function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Otoniel Júnior sorrindo usando casaco azul escuro, barba e com Árvores de fundo. A foto é arredondada com a borda Preta"
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Otoniel Júnior sorrindo usando casaco azul escuro, barba e com Árvores de fundo. A foto é arredondada com a borda Branca"
    )
  }
}
