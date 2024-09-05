// Configuración
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const shapes = ["square", "circle", "triangle"]; // Lista de formas geométricas
const numShapes = 50; // Reducir el número de formas por fotograma
const shapeSize = 50;

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Función para generar un número aleatorio entre dos valores
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para dibujar una forma geométrica aleatoria con estilo neon
function drawNeonShape(x, y, shape) {
  ctx.beginPath();
  switch (shape) {
    case "square":
      ctx.rect(x, y, shapeSize, shapeSize);
      break;
    case "circle":
      ctx.arc(
        x + shapeSize / 2,
        y + shapeSize / 2,
        shapeSize / 2,
        0,
        Math.PI * 2
      );
      break;
    case "triangle":
      ctx.moveTo(x + shapeSize / 2, y);
      ctx.lineTo(x, y + shapeSize);
      ctx.lineTo(x + shapeSize, y + shapeSize);
      ctx.closePath();
      break;
    // Agrega más casos para otras formas geométricas
  }
  ctx.shadowBlur = 10; // Ajusta el desenfoque para el efecto neon
  ctx.shadowColor = "#fff"; // Color del brillo neon
  ctx.lineWidth = 2; // Grosor de la línea
  ctx.strokeStyle = "#fff"; // Color de la línea
  ctx.stroke();
}

// Animación
function animate() {
  // Limpiar el canvas en cada frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar formas geométricas aleatorias con estilo neon
  for (let i = 0; i < numShapes; i++) {
    const x = randomInt(0, canvas.width - shapeSize);
    const y = randomInt(0, canvas.height - shapeSize);
    const shape = shapes[randomInt(0, shapes.length - 1)];
    drawNeonShape(x, y, shape);
  }

  // Solicitar el siguiente frame de animación después de un intervalo de tiempo
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 800); // Aumenta el valor del tiempo de espera para que la animación sea más lenta
}

// Iniciar la animación
animate();
