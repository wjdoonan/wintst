var wte = "rgb(255, 255, 255)";
var tab = localStorage.getItem('tabs');
function page_docs() {document.getElementById('page_docs').style.backgroundColor = wte;document.getElementById('text_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('isert_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('images_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('addons_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('export_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';localStorage.setItem('tabs', 1);}
function page_insert() {
    document.getElementById('isert_docs').style.backgroundColor = wte;document.getElementById('page_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('text_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('images_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('addons_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('export_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';localStorage.setItem('tabs', 2);
}
function page_text() {
    document.getElementById('text_docs').style.backgroundColor = wte;document.getElementById('page_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('isert_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('images_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('addons_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';document.getElementById('export_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';localStorage.setItem('tabs', 3);
}
function page_image() {
    document.getElementById('images_docs').style.backgroundColor = wte;
    document.getElementById('page_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('text_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('isert_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('addons_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('export_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    localStorage.setItem('tabs', 4);
}
function page_addons() {
    document.getElementById('addons_docs').style.backgroundColor = wte;
    document.getElementById('page_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('text_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('images_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('isert_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('export_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    localStorage.setItem('tabs', 5);
}
function page_export() {
    document.getElementById('export_docs').style.backgroundColor = wte;
    document.getElementById('page_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('text_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('images_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('addons_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    document.getElementById('isert_docs').style.backgroundColor = 'rgba(23, 131, 23, 0.504)';
    localStorage.setItem('tabs', 6);
}
setInterval(tabs, 1)
function tabs() {
    document.getElementById("tabs_count").innerHTML = localStorage.getItem("tabs");
}
if (tab == 1) {
    page_docs();
}
console.warn('tab');