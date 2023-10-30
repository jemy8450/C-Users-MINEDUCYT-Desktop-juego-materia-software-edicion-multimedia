
function cargarInicio() {
    let canvas = document.getElementById("canvas")
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d")
        if (ctx) {
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#ff0000";

            ctx.lineWidth = 5;
            //x,y.ancho y alto
            ctx.fillRect (50, 50, 100, 100)
            // metodo para dibujar lineas x, y, w, h 
            ctx.strokeRect(50, 50, 100, 100)

            // nuevo cuadrado
            ctx.fillStyle = "rgba(250,250,0,0.25)";
            ctx.fillRect(100, 50, 100, 100)
            ctx.strokeRect(50, 50, 100, 100)
        }
    }
}

window.onload = cargarInicio()