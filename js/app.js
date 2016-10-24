window.addEventListener("load", function () {
	var contentTabla = document.getElementById("content-tabla");
	var contentFormularioTitulo = document.getElementById("content-formulario-titulo");
	var formularioTitulo = document.getElementById("formulario-titulo");
	var spanTitulo = document.getElementById("span-titulo");
		spanTitulo.addEventListener("click", creandoFormLista);

		function creandoFormLista(evento){
			spanTitulo.classList.add("hiden");
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
				btnTitulo.classList.add("btn");
				btnTitulo.textContent = "Guardar";
				divTitulo.appendChild(btnTitulo);
				btnTitulo.addEventListener("click", creandoTitulo);
			var cerrarTitulo = document.createElement("a");
				cerrarTitulo.classList.add("btn-floating");
				divTitulo.appendChild(cerrarTitulo);
				icoCerrarTitulo = document.createElement("i");
				icoCerrarTitulo.classList.add("material-icons");
				icoCerrarTitulo.textContent = "cancel";
				cerrarTitulo.appendChild(icoCerrarTitulo);
		}

		function creandoTitulo(evento){
			var contenedorColumna = this.parentElement.parentElement.parentElement.parentElement.parentElement;
			var inputTitulo = document.getElementById("input-titulo");
			var inputTituloValor = inputTitulo.value;
				inputTitulo.value = "";
			var titulo = document.createElement("div");
				titulo.innerHTML = "<b>" + inputTituloValor + "</b>";
				contenedorColumna.appendChild(titulo);
			var divTarjeta = document.createElement("div");
				contenedorColumna.appendChild(divTarjeta);
			var divTarjetaSpan = document.createElement("div");	
				divTarjeta.appendChild(divTarjetaSpan);			
			var tarjetaSpan = document.createElement("span");
				tarjetaSpan.textContent = "Añadir una tarjeta...";
				divTarjetaSpan.appendChild(tarjetaSpan);
				//tarjetaSpan.addEventListener("click",creandoFormTarjeta);
			var creandoColumna = document.createElement("div");
				creandoColumna.classList.add("class","columna");
				contentTabla.appendChild(creandoColumna);
			var hijoNuevaColumna = this.parentElement.parentElement.parentElement.parentElement
				creandoColumna.appendChild(hijoNuevaColumna);
		}

});