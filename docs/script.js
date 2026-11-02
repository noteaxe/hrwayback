
window.onload = function(){
    const articles = document.querySelectorAll('article[class="link"]')
    const lis = document.querySelectorAll('li[role="article"]')
    const total = articles.length + lis.length
    
    const counter = document.getElementById('counterValue')
    counter.innerHTML = total.toString()
};