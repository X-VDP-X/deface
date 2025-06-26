document.body.innerHTML = `
  <h1>Hacked by X-VDP-X - HXH</h1>

  <div class="logos">
    <img src="https://i.postimg.cc/q79gXyTp/image-2.webp" alt="Logo VDP" />
    <img src="https://media.discordapp.net/attachments/1362519025065922723/1387851021610520596/81E6073E-2513-438C-B039-67A6EDD098CF.jpg?ex=685ed87c&is=685d86fc&hm=0be39a727f950dd1dda887ec6ba3a38a5c5ff678750984bcc0db8c5af752088e&=&format=webp&width=868&height=960" alt="Logo HxH" />
  </div>

  <div class="hashtag-line"># Hack world # X-VDP-X # HXH # HACKED</div>

  <div class="newalliance">New Alliance :</div>
  <div class="xvdp">X-VDP-X</div>
  <div class="hxh">
    <span class="red">H</span>
    <span class="blue">X</span>
    <span class="orange">H</span>
  </div>
  <div class="teams">Cyber_Hay | Diable'Fire | L’Ombre Noire</div>
`;

const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  body {
    background: #000;
    color: #fff;
    font-family: 'Courier New', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 40px 20px;
    text-align: center;
  }
  h1 {
    font-size: 4rem;
    color: #ff0000;
    text-shadow: 0 0 15px #ff0000, 0 0 30px #990000;
    margin-bottom: 60px;
    user-select: none;
  }
  .logos {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 20px;
  }
  .logos img {
    height: 160px;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(255, 0, 0, 0.5);
    user-select: none;
  }
  .hashtag-line {
    font-size: 1.9rem;
    color: #ff0000;
    text-shadow: 0 0 15px #ff0000, 0 0 30px #990000;
    letter-spacing: 0.15em;
    margin: 30px 0 50px;
    user-select: none;
    padding-bottom: 8px;
    border-bottom: 2px solid #ff0000;
    max-width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    font-weight: bold;
    font-family: 'Courier New', monospace;
  }
  .newalliance {
    font-size: 2.2rem;
    color: #ffaa00;
    text-shadow: 0 0 10px #ffaa00;
    margin-bottom: 20px;
    user-select: none;
  }
  .xvdp {
    font-size: 2rem;
    color: #ff0000;
    text-shadow: 0 0 10px #ff0000;
    margin-bottom: 10px;
    user-select: none;
    font-weight: bold;
  }
  .hxh {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    user-select: none;
  }
  .hxh span {
    padding: 0 6px;
  }
  .hxh .red {
    color: #d90012;
    text-shadow: 0 0 8px #d90012;
  }
  .hxh .blue {
    color: #0033a0;
    text-shadow: 0 0 8px #0033a0;
  }
  .hxh .orange {
    color: #f2a800;
    text-shadow: 0 0 8px #f2a800;
  }
  .teams {
    font-size: 1.5rem;
    color: #ff0000;
    text-shadow: 0 0 8px #ff0000;
    letter-spacing: 0.12em;
    user-select: none;
  }
  @media (max-width: 480px) {
    h1 { font-size: 2.5rem; }
    .hashtag-line { font-size: 1.4rem; }
    .newalliance, .xvdp, .hxh, .teams { font-size: 1.3rem; }
    .logos img { height: 100px; }
  }
`;
document.head.appendChild(style);
