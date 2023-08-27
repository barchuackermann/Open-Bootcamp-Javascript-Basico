const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
  })
  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", () => {
    event.preventDefault()
  })
  seccion.addEventListener("drop", (event) => {
    const idparrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(idparrafo)
    seccion.appendChild(parrafo)
  })
})

const deleteP = document.querySelector(".deleteP")
deleteP.addEventListener("dragover", () => {
  event.preventDefault()
})
deleteP.addEventListener("drop", (event) => {
  const idparrafo = event.dataTransfer.getData("id")
  const parrafo = document.getElementById(idparrafo)
  parrafo.classList.add("d-none")
})
