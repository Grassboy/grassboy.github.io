(function(){
document.getElementsByClassName = document.getElementsByClassName || function(className){
    var a = [];
    var re = new RegExp('(^| )'+className+'( |$)');
    var els = document.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;	
};
var buttons = document.getElementsByClassName("plurk-pu");
var n1 = buttons.length;
for(var i = 0; i < n1; i++){
	var btn = buttons[i];
	var d, a, n2, aj, name, value;
	if(!btn.dataset){
		btn.dataset = {};
		d = btn.dataset; a = btn.attributes; n2 = a.length;
		for(var j = 0; j < n2; j++){
			aj = a[j]; name = aj.name; value = aj.value;
			if(name.substr(0,5)!="data-") continue;
			d[name.substr(5)] = value;
		}
	}
	var result_url = ['http://grassboy.tw/plurkTool/push_button/?get'];
	d = btn.dataset;
	d.status = d.status || "{url}";
	result_url.push("&href=", encodeURIComponent(d.href));
	result_url.push("&status=", encodeURIComponent(d.status));

	if(d.img) result_url.push("&img=", encodeURIComponent(d.img));
	if(d.title) result_url.push("&title=", encodeURIComponent(d.title));
	if(d.qualifier) result_url.push("&qualifier=", encodeURIComponent(d.qualifier));
	
	var iframe = document.createElement("iframe");
	iframe.src = result_url.join('');
	iframe.frameBorder = 0;
	iframe.allowTransparency = true;
	iframe.scrolling = "no";
	iframe.style.cssText = ["width:",parseInt(d.width) || 180,"px; margin: 2px 0; height:24px; overflow:hidden; border:none;"].join('');
	btn.parentNode.insertBefore(iframe, btn);
	btn.parentNode.removeChild(btn);
}
})();
