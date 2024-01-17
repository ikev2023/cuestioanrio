let cont = 0;
const audioElement = new Audio("Snapback.mp3")
document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("toggleCheckbox");

    // Evento al cambiar el estado del checkbox
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            // Si está marcado, iniciar la música
            audioElement.play();
        } else {
            // Si no está marcado, pausar la música
            audioElement.pause();
        }
    });
});
function verificar()
{
    let rdb_res1 = document.getElementById("res1");
    //pregunta 1
    if (rdb_res1.checked)
    {
        cont++;
        alert("respuesta correcta :D")
        document.getElementById("pregunta1").style.display = 'none';
        document.getElementById("pregunta2").style.display = 'block';
    }
    else
    {
        alert("respuesta Incocrrecta :C")
        document.getElementById("pregunta1").style.display = 'none';
        document.getElementById("pregunta2").style.display = 'block';
    }
}
function verificar_2()
{
    let rdb_res2 = document.getElementById("res2");
    //pregunta 2
    if (rdb_res2.checked)
    {
        cont++;
        alert("respuesta correcta :D")
        document.getElementById("pregunta2").style.display = 'none';
        mostrarResultados()
    }
    else
    {
        alert("respuesta Incocrrecta :C")
        document.getElementById("pregunta2").style.display = 'none';
        mostrarResultados()
    }
}
function mostrarResultados() 
{
    document.getElementById("resultados").style.display = 'block';
    document.getElementById("h1_res").innerText = "Resultados: " + cont;
}
function reproducirEnBucle(audioElement) 
{
    audioElement.addEventListener("ended", function() {
        // Reiniciar la reproducción al principio
        this.currentTime = 0;
        this.play();
    });

    // Iniciar la reproducción
    audioElement.play();
}

