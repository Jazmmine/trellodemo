var contadorId = 0;
var prueba;
console.log("version roñoso 10.52");
window.addEventListener("load", function () {
	var contentTabla = document.getElementById("content-tabla");
	var contentFormularioTitulo = document.getElementById("content-formulario-titulo");
	var formularioTitulo = document.getElementById("formulario-titulo");
	var tablaTitulo = document.getElementsByClassName("tabla-titulo")[0];
	var columna = document.getElementsByClassName("columna")[0];
	var spanTitulo = document.getElementById("span-titulo");
		spanTitulo.addEventListener("click", creandoFormLista);

		function creandoFormLista(evento){
			spanTitulo.classList.add("hiden");
			tablaTitulo.setAttribute("class", "fondo-gris-click");
			var divTitulo = document.createElement("div");
				divTitulo.setAttribute("id","div-titulo");
				formularioTitulo.appendChild(divTitulo);
			var inputTitulo = document.createElement("input");
				inputTitulo.setAttribute("type","text");
				inputTitulo.setAttribute("id","input-titulo");
				inputTitulo.classList.add("bloque");
				inputTitulo.setAttribute("placeholder", "Añadir una lista...");
				divTitulo.appendChild(inputTitulo);
				inputTitulo.focus();
			var btnTitulo = document.createElement("a");
				btnTitulo.classList.add("btn", "btn-style");
				btnTitulo.textContent = "Guardar";
				divTitulo.appendChild(btnTitulo);
				btnTitulo.addEventListener("click", creandoTitulo);
			var cerrarTitulo = document.createElement("a");
				divTitulo.appendChild(cerrarTitulo);
				icoCerrarTitulo = document.createElement("i");
				icoCerrarTitulo.classList.add("material-icons", "small", "right", "btneliminar");
				icoCerrarTitulo.textContent = "delete_forever";
				cerrarTitulo.appendChild(icoCerrarTitulo);
				cerrarTitulo.addEventListener("click", cerrarTituloClick);
		}

		function cerrarTituloClick(evento){
			spanTitulo.classList.remove("hiden");
			tablaTitulo.setAttribute("class", "tabla-titulo");
			var divTitulo = this.parentElement;
				divTitulo.classList.add("hiden");
			var nuevaColumna = this.parentElement.parentElement.parentElement.parentElement.parentElement;
				nuevaColumna.classList.remove("columna-click");
		}

		function creandoTitulo(evento){
			var contenedorColumna = this.parentElement.parentElement.parentElement.parentElement.parentElement;
			var inputTitulo = document.getElementById("input-titulo");
			var inputTituloValor = inputTitulo.value;
				inputTitulo.value = "";
			var titulo = document.createElement("div");
				titulo.classList.add("margen-izquierda", "fondo-arriba");
				tituloP = document.createElement("p");
				titulo.appendChild(tituloP);
				tituloP.innerHTML = "<b>" + inputTituloValor + "</b>";
				contenedorColumna.appendChild(titulo);
			var divTarjeta = document.createElement("div");
				contenedorColumna.appendChild(divTarjeta);
				divTarjeta.style.border = "2px solid red";
			var contenedorTarjetaDrag = document.createElement("div");
				contenedorTarjetaDrag.style.border = "2px solid green";
				divTarjeta.appendChild(contenedorTarjetaDrag);
				contenedorTarjetaDrag.addEventListener("dragover",arrastrarSobre);
				contenedorTarjetaDrag.addEventListener("drop", soltar);				
			var divTarjetaSpan = document.createElement("div");	
				divTarjeta.appendChild(divTarjetaSpan);			
			var tarjetaSpan = document.createElement("span");
				tarjetaSpan.textContent = "Añadir una tarjeta...";
				divTarjetaSpan.classList.add("div-tarjeta-span");
				divTarjetaSpan.appendChild(tarjetaSpan);
				tarjetaSpan.addEventListener("click",creandoFormTarjeta);
			var creandoColumna = document.createElement("div");
				creandoColumna.classList.add("columna", "columna-click");
				contentTabla.appendChild(creandoColumna);
			var hijoNuevaColumna = this.parentElement.parentElement.parentElement.parentElement
				creandoColumna.appendChild(hijoNuevaColumna);
				inputTitulo.focus();
			columna.classList.add("columna-click");
		}

		function creandoFormTarjeta(evento){
			var divTarjetaSpan = this.parentElement;
				divTarjetaSpan.setAttribute("class","fondo-gris-click");
			var tarjetaSpanDesaparecer = this;
				tarjetaSpanDesaparecer.setAttribute("class","hiden"); 
			var formTarjeta = document.createElement("form");
				formTarjeta.setAttribute("id","formulario-tarjeta")
				divTarjetaSpan.appendChild(formTarjeta);
			var textAreaTarjeta = document.createElement("textarea");
				textAreaTarjeta.setAttribute("row","5");
				textAreaTarjeta.classList.add("bloque", "textarea");
				textAreaTarjeta.setAttribute("placeholder", "Añadir una tarjeta...");
				formTarjeta.appendChild(textAreaTarjeta);
			var btnTarjeta = document.createElement("a");
				btnTarjeta.classList.add("btn", "btn-style");
				btnTarjeta.textContent = "Añadir";
				formTarjeta.appendChild(btnTarjeta);
				btnTarjeta.addEventListener("click", creandoTarjeta);
			var cerrarTarjeta = document.createElement("a");
				formTarjeta.appendChild(cerrarTarjeta);
				icocerrarTarjeta = document.createElement("i");
				icocerrarTarjeta.classList.add("material-icons", "small", "right","btneliminar");
				icocerrarTarjeta.textContent = "delete_forever";
				cerrarTarjeta.appendChild(icocerrarTarjeta);
				cerrarTarjeta.addEventListener("click", cerrarTarjetaClick);
		}

		function cerrarTarjetaClick(evento){
			var formTarjeta = this.parentElement;
				formTarjeta.classList.add("hiden");
			var divTarjetaSpan = this.parentElement.parentElement.firstElementChild;
				divTarjetaSpan.classList.remove("hiden");
			var divTarjeta = this.parentElement.parentElement;
				divTarjeta.setAttribute("class", "div-tarjeta-span");
		}

		function creandoTarjeta(evento){
			var idTarjetaGenerada = obtenerIdTarjeta();
			var divTarjeta = this.parentElement.parentElement.parentElement; 
			var contenedorTarjetaDrag = this.parentElement.parentElement.parentElement.childNodes[0];
			prueba = this;
			//console.log(prueba);
			//console.log(contenedorTarjetaDrag);
			var tarjetaTextArea = this.parentElement.children[0];
			var tarjetaTextAreaValor = tarjetaTextArea.value;
				tarjetaTextArea.value = "";
			var divTarjetaSpan = this.parentElement.parentElement;
			var divTarjetaDrag = document.createElement("div");
				divTarjetaDrag.style.border = "2px solid pink";
				divTarjetaDrag.setAttribute("draggable", "true");
				divTarjetaDrag.setAttribute("id", idTarjetaGenerada + "");
				divTarjetaDrag.addEventListener("dragstart", empiezaArrastrar);				
				contenedorTarjetaDrag.appendChild(divTarjetaDrag);
			console.log(contenedorTarjetaDrag);
			var tarjeta = document.createElement("div");
				tarjeta.classList.add("margen-izquierda");				
				tarjeta.textContent = tarjetaTextAreaValor;	
				divTarjetaDrag.appendChild(tarjeta);
				divTarjeta.insertBefore(contenedorTarjetaDrag,divTarjetaSpan);				
				tarjetaTextArea.focus();
		}

		function empiezaArrastrar(e) {
			e.dataTransfer.setData("text", this.id);
		} 

		function arrastrarSobre(e) {
			e.preventDefault();
		}

		function soltar(e) {
			var idArrastrado = e.dataTransfer.getData("text");
			e.target.appendChild(document.getElementById(idArrastrado));
			//e.target.insertBefore(e.target.appendChild(document.getElementById(idArrastrado)),e.target.parentElement.childNodes[0]);
		}

}); 

function obtenerIdTarjeta(){
	contadorId++;
	return contadorId;
}