(function(){
var i=document.getElementById("ti"),ab=document.getElementById("ab"),
    tl=document.getElementById("tl"),ct=document.getElementById("ct"),
    cb=document.getElementById("cb");
var t=JSON.parse(localStorage.getItem("ax-todos")||"[]");
function s(){localStorage.setItem("ax-todos",JSON.stringify(t));}
function u(){ct.textContent=t.filter(function(x){return !x.d}).length+" remaining";}
function render(){
  tl.innerHTML="";
  t.forEach(function(task,idx){
    var li=document.createElement("li");
    if(task.d)li.classList.add("done");
    var chk=document.createElement("input");chk.type="checkbox";chk.checked=task.d;
    chk.onchange=function(){t[idx].d=chk.checked;s();render();};
    var sp=document.createElement("span");sp.textContent=task.v;
    var d=document.createElement("button");d.className="del";d.textContent="x";
    d.onclick=function(){t.splice(idx,1);s();render();};
    li.append(chk,sp,d);tl.appendChild(li);
  });
  u();
}
function add(){var v=i.value.trim();if(!v)return;t.push({v:v,d:false});i.value="";s();render();}
ab.onclick=add;
i.onkeydown=function(e){if(e.key==="Enter")add();};
cb.onclick=function(){t=t.filter(function(x){return !x.d});s();render();};
render();
})();