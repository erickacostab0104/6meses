  function playMusic() {
    const audio = document.getElementById("bg-music");
    audio.play();
  
    // Lanza confeti 🎉
    lanzarConfeti();
  
    // Baja al timeline
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
  }
  
  function lanzarConfeti() {
    const duration = 3 * 1000; // 3 segundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
  
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      confetti(
        Object.assign({}, defaults, {
          particleCount: 50,
          origin: { x: Math.random(), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const textoCarta = `Mi bebita...
  
  No sé cómo explicar con palabras lo feliz que me haces. Estos 6 meses contigo han sido los más bonitos que he vivido. Cada mirada tuya, cada risa, cada abrazo, me llenan el alma de una forma que nunca había sentido. Gracias por existir y estar a mi lado.
  
  No me pienso rendir nunca. Quiero vivir contigo muchos meses más, años, y una eternidad. Quiero tener una niñita contigo, con esos ojitos tuyos que tanto me encantan. Te prometo cuidarte, respetarte, amarte y hacerte sonreír cada día. Porque tú eres mi lugar seguro.
  
  Te quiero con todo mi ser ❤️`;
  
    const elemento = document.getElementById("carta-texto");
    let i = 0;
  
    function escribir() {
      if (i < textoCarta.length) {
        elemento.textContent += textoCarta.charAt(i);
        i++;
        setTimeout(escribir, 40); // velocidad de escritura
      }
    }
  
    escribir();
  });
  