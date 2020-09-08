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

<div id="spinny">#</div>

<div class="main">

  <div class="head">
    <h1>q5<sub>#</sub>js</h1>
    <div><i>A small and fast alternative implementation of <b><a href="https://p5js.org/">p5.js</a></b>.</i>  <a href="q5.min.js" style="text-decoration:underline">[Download (33KB minified)]</a></div>
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