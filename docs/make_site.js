const fs = require('fs');

let snippets = fs.readFileSync("tests.js").toString().split("/*~~~").filter(x=>x.trim().length).map(x=>({link:x.split("~~~*/")[0].trim(),code:x.split("~~~*/")[1].trim()}))

for (var i = 0; i < snippets.length; i++){
  let romnum = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

  for (var i = 0; i < snippets.length; i++){
    let isUniq = true;
    let rank = 0;
    for (var j = 0; j < snippets.length; j++){
      if (snippets[i].link == snippets[j].link){
        if (i > j){
          rank ++;
          isUniq = false;
        }else if (i < j){
          isUniq = false;
        }
      }
    }
    let name = snippets[i].link.split("#/")[1].replace("p5/","").replace("p5.","");
    let id = name.replace(/[^A-z0-9]/g,"_");
    if (!isUniq){
      name += " "+romnum[rank]+"";
      id += "__"+rank;
    }
    snippets[i].id = id;
    snippets[i].name = name;
  }
}
snippets = Object.fromEntries(snippets.map(x=>[x.id,x])/*.sort()*/);
let keywords = Object.keys(snippets).map(x=>snippets[x].name.replace('/','.').split(" ")[0]).sort((a,b)=>(b.length-a.length));

function openEg(id){
  function decorateP5(code){
    if (!~code.search(/function +setup *\( *\)/)){
      if (!~code.search(/function/)){
        code = "function setup(){\n"+code+"\n};"
      }else{
        code = "function setup(){};\n"+code;
      }
    }
    code = code.replace(/setup\( *\) *{/,"setup(){\npixelDensity(1);")
    code = `\nlet _a = new p5();\n`+code+`;\n_a._start();`
    return code;
  }
  function decorateQ5(code){
    return `new Q5("global");\n\n${code.replace(/p5\.([A-Z])/g,"$1")}`
  }
  let cq5 = decorateQ5(snippets[id].code);

  let ifrl = document.getElementById("ifrl");
  let ifrr = document.getElementById("ifrr");


  let html = `<body style="margin:0px;overflow:hidden;background:gainsboro"></body><script src="q5.js"><\/script><script>${cq5}<\/script>`;
  let htmr = `<body style="margin:0px;overflow:hidden;background:gainsboro"></body><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"><\/script><script>${decorateP5(snippets[id].code)}<\/script>`;


  ifrl.contentWindow.location.reload();
  ifrr.contentWindow.location.reload();

  ifrl.onload = function(){
    ifrl.contentWindow.document.write(html);
  }
  ifrr.onload = function(){
    ifrr.contentWindow.document.write(htmr);
  }
  ifrr.contentWindow.document.innerHTML = htmr;
  // ifrr.src = "test.html";
  document.getElementById("subt").innerHTML = snippets[id].name;
  
  let ln = document.getElementById("p5link")
  ln.innerHTML = snippets[id].link;
  ln.href = snippets[id].link;

  let cdiv = document.getElementById("code");

  let lines = cq5.split("\n");
  for (var i = 0; i < lines.length; i++){
    let cod = lines[i].split("//")[0];
    let com = lines[i].slice(cod.length);
    for (var j = 0; j < keywords.length; j++){
      cod = cod.replace(new RegExp('('+keywords[j]+')([^A-z])','gm'),'<b>$1</b>$2')
    }
    lines[i] = cod+`<span style="color:gray">${com}</span>`
  }
  cdiv.innerHTML = lines.join("\n");

}

let html = `
<!-- GENERATED HTML DO NOT EDIT (see make_site.js) --->
<style>
body{
  margin: 0px;
  font-family: sans-serif;
  background: white;
  color: rgb(10,10,10);
}
.card{
  display:inline-block;
  padding:10px;
  margin:20px;
  margin-left:0px;
  margin-right:50px;
  // box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  border: 1px solid black;
}
.linkbox{
  display:block;
  padding:5px 10px 5px 10px;
}
a{
  text-decoration:none;
  color: black;
}
a:hover{
  text-decoration:underline;
}
#code{
  // height:200px;
  // overflow:scroll;
  margin: 20px;
  margin-left:0px;
}
.lside{
  position:absolute;
  left:0px;
  top:150px;
  width:200px;
  overflow:scroll;
  height:calc(100% - 150px);
  text-align:right;
}
.rside{
  position:absolute;
  left:200px;
  top:150px;
  width:600px;
  overflow:scroll;
  height:calc(100% - 150px);
}
.rinner{
  margin-left:50px;
}
.main{
  position:absolute;
  left:calc(50% - 400px);
  top:0px;
  width:800px;
  height:100%;
}
.head{
  margin-left:70px;
}
#p5link{
  text-decoration:underline;
}

#spinny{
  font-size:200px;
  color:gainsboro;
  position:absolute;
  left:calc(50% - 425px);
  top:20px;
  font-weight:bold;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gainsboro;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gainsboro;
}

</style>

<a href="https://github.com/LingDong-/q5xjs" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:gainsboro; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>

<div id="spinny">#</div>

<div class="main">

  <div class="head">
    <h1>q5<sub>#</sub>js</h1>
    <div><i>A small and fast alternative implementation of <b><a href="https://p5js.org/">p5.js</a></b>.</i>  <a href="q5.min.js" style="text-decoration:underline">[Download (33KB minified)]</a></div>
    
    <div style="font-size:16px;font-weight:bold;margin-top:10px;margin-bottom:15px">
      <a href="https://mark-this-down.glitch.me/?https://cdn.jsdelivr.net/gh/LingDong-/q5xjs/README.md">README</a> | <a href="https://github.com/LingDong-/q5xjs">Source Code</a>
    </div>
  </div>

  <div class="lside">
    ${Object.keys(snippets).map(x=>`<div class="linkbox"><a href="javascript:void(0)" onclick="openEg('${x}');">${snippets[x].name}</a></div>`).join("")}
  </div>

  <div class="rside"><div class="rinner">
    <div id="subt" style="font-weight:bold"></div>
    <div class="card"><div style="margin-bottom:4px;">q5.js<sub>(this)</sub></div><iframe id="ifrl" width="100" height="100" frameBorder="0"></iframe></div>
    <div class="card"><div style="margin-bottom:4px;">p5.js<sub>(reference)</sub></div><iframe id="ifrr" width="100" height="100" frameBorder="0"></iframe></div>
    <pre id="code"></pre>
    <div><sub>From the original p5 example at <a id="p5link"></a></sub></div>
  </div></div>

</div>

<script>
let snippets = ${JSON.stringify(snippets)};
let keywords = ${JSON.stringify(keywords)};
${openEg.toString()};
openEg('bezierTangent__0');



let rot = 0;
document.getElementsByClassName("lside")[0].onscroll = function(){
  rot++;
  document.getElementById("spinny").style.transform="rotate("+rot+"deg)";
}

</script>
`

fs.writeFileSync("index.html",html);