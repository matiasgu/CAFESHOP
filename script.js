var ingredientes_opcion1 = ['leche entera', 'jarabe', 'hielo', 'salsa de chocolate', 'chips de chocolate', 'vainilla', 'polvo de cacao', 'crema batida']
var ingredientes_opcion2 = ['leche entera', 'jarabe', 'hielo', 'salsa de chocolate', 'chips de chocolate', 'vainilla', 'polvo de cacao', 'crema batida']
var ingredientes_opcion3 = ['leche entera', 'jarabe', 'hielo', 'salsa de chocolate', 'chips de chocolate', 'vainilla', 'polvo de cacao', 'crema batida']
var ingredientes_opcion4 = ['leche entera', 'jarabe', 'hielo', 'salsa de chocolate', 'chips de chocolate', 'vainilla', 'polvo de cacao', 'crema batida']

function cargar(opcion){
    var nombre = document.getElementById("nombre")
    var descripcion = document.getElementById("descripcion")
    var fotoPrincipal = document.getElementById("fotoPrincipal")
    var circulo = document.getElementById("circulo")
    var ingredientes = document.getElementById("ingredientes")

    if (opcion==1) {
        nombre.innerHTML = "Frappe de Chocolate"
        descripcion.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, error."
        fotoPrincipal.src = "imagenes/cafe.png"
        circulo.style.backgroundColor = "#f88965"
        ingredientes.innerHTML = ""
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li")
            const i = document.createElement("i")
            i.classList = "fa-solid fa-check"
            li.appendChild(i)
            const txt = document.createElement("txt")
            txt.innerHTML = ingredientes_opcion1[x]
            li.appendChild(txt)
            ingredientes.appendChild(li)
        }
    }
    if (opcion==2) {
        nombre.innerHTML = "Frappe de Vainilla"
        descripcion.innerHTML = "22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, error."
        fotoPrincipal.src = "imagenes/cafe.png"
        circulo.style.backgroundColor = "#f1c072"
        ingredientes.innerHTML = ""
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li")
            const i = document.createElement("i")
            i.classList = "fa-solid fa-check"
            li.appendChild(i)
            const txt = document.createElement("txt")
            txt.innerHTML = ingredientes_opcion2[x]
            li.appendChild(txt)
            ingredientes.appendChild(li)
        }
    }
    if (opcion==3) {
        nombre.innerHTML = "Frappe de Frutilla"
        descripcion.innerHTML = "33Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, error."
        fotoPrincipal.src = "imagenes/cafe.png"
        circulo.style.backgroundColor = "#d46475"
        ingredientes.innerHTML = ""
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li")
            const i = document.createElement("i")
            i.classList = "fa-solid fa-check"
            li.appendChild(i)
            const txt = document.createElement("txt")
            txt.innerHTML = ingredientes_opcion3[x]
            li.appendChild(txt)
            ingredientes.appendChild(li)
        }
    }
    if (opcion==4) {
        nombre.innerHTML = "Frappe de te"
        descripcion.innerHTML = "44Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, error."
        fotoPrincipal.src = "imagenes/cafe.png"
        circulo.style.backgroundColor = "#398969"
        ingredientes.innerHTML = ""
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li")
            const i = document.createElement("i")
            i.classList = "fa-solid fa-check"
            li.appendChild(i)
            const txt = document.createElement("txt")
            txt.innerHTML = ingredientes_opcion4[x]
            li.appendChild(txt)
            ingredientes.appendChild(li)
        }
    }
}
