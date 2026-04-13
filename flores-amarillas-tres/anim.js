// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var offset = 0.4; 

var lyricsData = [
  { text: "Ooh-ooh-ooh-ooh-ooh", time: 0.1 },        // Empieza casi al instante
  { text: "I'm in love with Judas, Judas", time: 6.5 }, // Aquí entra el bajo fuerte
  { text:  "I'm in love with Judas, Judas", time: 10.0},
  { text:  "          Judas", time: 15.0},
  { text:  "          Juda", time: 16.0},
  { text:  "          ah  ", time: 16.5},
  { text:  "          as", time: 16.9},
  { text:  "          Judas", time: 17.1},
  { text:  "          Juda", time: 18},
  { text:  "          Judas", time: 18.5},
  { text:  "          Juda", time: 19.0},
  { text:  "          ah ", time: 19.5},
  { text:  "          as", time: 19.9},
  { text:  "          Judas", time: 20.5},
  { text:  "          GAGA", time: 21.0},
  { text:  "          Judas", time: 29.0},
  { text:  "          Juda", time: 30.0},
  { text:  "          ah", time: 30.5},
  { text:  "          as", time: 31.0},
  { text:  "          Judas", time: 31.5},
  { text:  "          Juda", time: 32.0},
  { text:  "          Judas", time: 33.0},
  { text:  "          Judas", time: 34.0},
  { text:  "          ah", time: 35.0},
  { text:  "          as", time: 35.5},
  { text:  "          GAGA", time: 36.0},

  { text: "When he calls to me, I am ready", time: 37 },
  { text: "I wash his feet with my hair if he needs", time: 40.0 },
  { text: "Forgive him when his tongue lies through his brain", time: 44.0 },
  { text: "Even after three times, he betrays me", time: 48.0},
  { text: "I'll bring him down, bring him down, down", time: 55.0 },
  { text: "A king with no crown, king with no crown", time: 62.0},
  { text: "I'm just a Holy Fool, oh baby, he's so cruel", time: 66.0},
  { text: "But I'm still in love with Judas, baby", time: 70.0 },
  { text: "I'm just a Holy Fool, oh baby, he's so cruel", time: 73.0},
  { text: "But I'm still in love with Judas, baby", time: 77.0},
  { text: "I'm in love with Judas, Judas ", time: 83.0 },
  { text: "I'm in love with Judas, Judas ", time: 91.0 },
  { text:  "          Judas", time: 96.0},
  { text:  "          Juda", time: 96.5},
  { text:  "          ah", time: 97.0},
  { text:  "          as", time: 97.4},
  { text:  "          Judas", time: 97.9},
  { text:  "          Juda", time: 98.3},
  { text:  "          ah", time: 99.0},
  { text:  "          as", time: 99.5},



];

function updateLyrics() {
  // Quitamos el redondeo para máxima precisión
  var time = audio.currentTime + offset; 
  
  var currentLine = lyricsData.find(
    (line, index) => {
      var nextLineTime = lyricsData[index + 1] ? lyricsData[index + 1].time : time + 5;
      return time >= line.time && time < nextLineTime;
    }
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
    lyrics.style.color = "#00FFFF";
  } else {
    lyrics.style.opacity = 0;
  }
}

setInterval(updateLyrics, 50);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);