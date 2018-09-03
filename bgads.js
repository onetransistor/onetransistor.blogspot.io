
var au = "https://gist.githubusercontent.com/onetransistor/b0f91dcc68a3da9e1f899750c682165c/raw/0d7d4b2cfaf44ae4621a454f002c7af9a1d7b847/bg_ads.json"
$.getJSON(au, function(data) {
	data.ads.forEach(showAd);
});



function showAd(ad) {
	var ac = '<a href="' + ad.url + '" target="_blank" rel="nofollow" onclick="gtag_ev(\'TopBanner\')"><img src="' + ad.img + '" /></a>';
	var ae = document.getElementById("top_banner");
	if (ae == NULL) return;
	ae.innerHTML = ac;
	ae.className = "onetransistor_main_top_banner";
	ae.setAttribute("data-placement", "bottom");
	ae.setAttribute("data-toggle", "tooltip");
	ae.setAttribute("data-original-title", "This is an affiliate link!");	
}

