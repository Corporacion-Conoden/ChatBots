const mensajes = document.getElementById('mensajes');
const formulario = document.getElementById('enviar-mensaje');
const inputMensaje = document.getElementById('mensaje');

let listaMensajes = [];

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const mensaje = inputMensaje.value.trim();
	if (mensaje) {
		listaMensajes.push(mensaje);
		const li = document.createElement('li');
		li.textContent = mensaje;
		mensajes.appendChild(li);
		inputMensaje.value = '';
	}
});