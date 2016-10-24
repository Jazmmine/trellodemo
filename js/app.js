window.addEventListener("load", function () {
	var contentTabla = document.getElementById("contenido-tabla");
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
				inputTitulo.setAttribute("placeholder", "Añadir una lista...");
				divTitulo.appendChild(inputTitulo);
				inputTitulo.focus();
			var btnTitulo = document.createElement("a");
				btnTitulo.classList.add("btn");
				btnTitulo.textContent = "Guardar";
				divTitulo.appendChild(btnTitulo);
				//btnTitulo.addEventListener("click", creandoLista);
			var cerrarTitulo = document.createElement("a");
				cerrarTitulo.classList.add("btn-floating");
				divTitulo.appendChild(cerrarTitulo);
				icoCerrarTitulo = document.createElement("i");
				icoCerrarTitulo.classList.add("material-icons");
				icoCerrarTitulo.textContent = "cancel";
				cerrarTitulo.appendChild(icoCerrarTitulo);
		}

});