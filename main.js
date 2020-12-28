$('.hamburger').click(function(){       
    $('#span1').toggleClass('active');
    $('#span2').toggleClass('active');
    $('body').toggleClass('active');
    $('nav').toggleClass('active');
 });
 $('nav').click(function(){       
    $('#span1').toggleClass('active');
    $('#span2').toggleClass('active');
    $('body').toggleClass('active');
    $('nav').toggleClass('active');
 });


 $('.logo, .nav-link, .scroll_btn_link, .img_btn').on('click', function(e) {
   // e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
   }, 1000, function(){
       window.location.hash = hash;
   });
});

const pop_up = document.querySelector('.pop-up');
document.querySelectorAll('.activites__img').forEach(item => {
item.addEventListener('click', event => {
    pop_up.style.opacity = "1";
    pop_up.style.visibility= "visible";
    })
});

const import_activites_container = document.querySelector('.import_activites_container');
const stockage_activites_container = document.querySelector('.stockage_activites_container');
const distribution_activites_container = document.querySelector('.distribution_activites_container');
const ventes_activites_container = document.querySelector('.ventes_activites_container');
const imp = document.querySelector('.imp');
const sto = document.querySelector('.sto');
const dis = document.querySelector('.dis');
const ven = document.querySelector('.ven');
import_activites_container.addEventListener('click', function(){
    imp.style.opacity = "1";
    sto.style.opacity = "0";
    dis.style.opacity = "0";
    ven.style.opacity = "0";
    import_activites_container.style.animationPlayState= "paused";
    stockage_activites_container.style.animationPlayState= "paused";
    distribution_activites_container.style.animationPlayState= "paused";
    ventes_activites_container.style.animationPlayState= "paused";
});
stockage_activites_container.addEventListener('click', function(){
    imp.style.opacity = "0";
    sto.style.opacity = "1";
    dis.style.opacity = "0";
    ven.style.opacity = "0";
    import_activites_container.style.animationPlayState= "paused";
    stockage_activites_container.style.animationPlayState= "paused";
    distribution_activites_container.style.animationPlayState= "paused";
    ventes_activites_container.style.animationPlayState= "paused";
});
distribution_activites_container.addEventListener('click', function(){
    imp.style.opacity = "0";
    sto.style.opacity = "0";
    dis.style.opacity = "1";
    ven.style.opacity = "0";
    import_activites_container.style.animationPlayState= "paused";
    stockage_activites_container.style.animationPlayState= "paused";
    distribution_activites_container.style.animationPlayState= "paused";
    ventes_activites_container.style.animationPlayState= "paused";
});
ventes_activites_container.addEventListener('click', function(){
    imp.style.opacity = "0";
    sto.style.opacity = "0";
    dis.style.opacity = "0";
    ven.style.opacity = "1";
    import_activites_container.style.animationPlayState= "paused";
    stockage_activites_container.style.animationPlayState= "paused";
    distribution_activites_container.style.animationPlayState= "paused";
    ventes_activites_container.style.animationPlayState= "paused";
});
 
const cross_container = document.querySelector('.cross_container');
cross_container.addEventListener('click', function(){
    pop_up.style.opacity = "0";
    pop_up.style.visibility= "hidden";
    import_activites_container.style.animationPlayState= "running";
    stockage_activites_container.style.animationPlayState= "running";
    distribution_activites_container.style.animationPlayState= "running";
    ventes_activites_container.style.animationPlayState= "running";
});


const scroll_btn_down = document.querySelector('.scroll_btn_down');
const scroll_btn_up = document.querySelector('.scroll_btn_up');
scroll_btn_down.addEventListener('click', function(){
        scroll_btn_down.style.zIndex = "-1";
        scroll_btn_up.style.zIndex = "1";
});
scroll_btn_up.addEventListener('click', function(){
        scroll_btn_down.style.zIndex = "1";
        scroll_btn_up.style.zIndex = "-1";
});


var acceuil = document.querySelector('#acceuil_section').offsetHeight;
var nos_activites = document.querySelector('#nos_activites_section').offsetHeight;
var nos_agences = document.querySelector('#nos_agences_section').offsetHeight;
var a_propos = document.querySelector('#a_propos_section').offsetHeight;
var contact = document.querySelector('#contact_section').offsetHeight;
const link_acceuil = document.querySelector('.nav-link_acceuil');
const link_nos_activites = document.querySelector('.nav-link_nos_activites');
const link_nos_agences = document.querySelector('.nav-link_nos_agences');
const link_a_propos = document.querySelector('.nav-link_a_propos');
const link_contact = document.querySelector('.nav-link_contact');

window.addEventListener('scroll', function(){
    if (window.pageYOffset >= 0 &&  window.pageYOffset <= acceuil - 1 ) {
        link_acceuil.style.color= "#0984e3";
    } else {
        link_acceuil.style.color= "#2c3335";
    }
});
window.addEventListener('scroll', function(){
    if (window.pageYOffset >= acceuil && window.pageYOffset <= acceuil + nos_activites - 1 ) {
        link_nos_activites.style.color= "#0984e3";
    } else {
        link_nos_activites.style.color= "#2c3335";
    }
});
window.addEventListener('scroll', function(){
    if (window.pageYOffset >= acceuil + nos_activites && window.pageYOffset <= acceuil + nos_activites + nos_agences - 1 ) {
        link_nos_agences.style.color= "#0984e3";
    } else {
        link_nos_agences.style.color= "#2c3335";
    }
});
window.addEventListener('scroll', function(){
    if (window.pageYOffset >= acceuil + nos_activites + nos_agences && window.pageYOffset <= acceuil + nos_activites + nos_agences + a_propos - contact - 1 ) {
        link_a_propos.style.color= "#0984e3";
    } else {
        link_a_propos.style.color= "#2c3335";
    }
});
window.addEventListener('scroll', function(){
    if (window.pageYOffset >= acceuil + nos_activites + nos_agences + a_propos - contact && window.pageYOffset <= acceuil + nos_activites + nos_agences + a_propos +contact - 1 ) {
        link_contact.style.color= "#0984e3";
    } else {
        link_contact.style.color= "#2c3335";
    }
});


    



 
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiZmxvd2kiLCJhIjoiY2tleXJ4bm90MGR0MjJzcGhiY2llb280ZiJ9.ydgTe5L65eukcYWEltXZkw'
// }).addTo(mymap);
// var marker = L.marker([51.5, -0.09]).addTo(mymap);
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }