
var au = "https://software.onetransistor.eu/ads.json"
$.getJSON(au, function(data) {
	data.ads.forEach(showAd);
});



function showAd(ad) {
	var ac = '<a href="' + ad.url + '" target="_blank" rel="nofollow" onclick="gtag_ev(\'TopBanner\')"><img src="' + ad.img + '" /></a>';
	var ae = document.getElementById("top_banner");
	if (ae == null) return;
	ae.innerHTML = ac;
	ae.className = "onetransistor_main_top_banner";
	ae.setAttribute("data-placement", "bottom");
	ae.setAttribute("data-toggle", "tooltip");
	ae.setAttribute("data-original-title", "This is an affiliate link!");	
}

