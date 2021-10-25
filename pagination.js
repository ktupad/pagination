pagination={
gebi:function(i){ return  document.getElementById(i);},
data:[{id:1,nama:"a" },{id:2,nama:"b"},{id:3,nama:"c"}],
page:1,
rpp:1,
callback:function(){},

view:function(id){
data=this.data;
rpp=this.rpp;
page=this.page;

var np= Math.ceil(data.length / rpp);
out  ='<div class="pagination">';
out += '<button id="p">Prev</button>';
out += '<button id="n">Next</button>';
out += '<span id="s">Page:</span>';
out += '</div>';
this.gebi(id).innerHTML=out;
p=this.gebi('p');
n=this.gebi('n');
s=this.gebi('s');

p.onclick = function(){ page--;
pagination.page=page;
pagination.view(id);
pagination.callback(page);
}
n.onclick = function(){page++;
pagination.page=page;
pagination.view(id);
pagination.callback(page);
}
s.innerHTML = 'Page: '+page + "/" + np + " | Record(s):" + data.length;
if (page < 1) page = 1;
if (page > np) page = np;
if (page == 1) { p.style.display = "none"; } else { p.style.display = "inline"; }
if (page == np) { n.style.display = "none"; } else { n.style.display = "inline"; }
if (data.length == 0) { p.style.display = "none"; n.style.display = "none";  }
},

};
