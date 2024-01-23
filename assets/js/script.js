let s2boxes = document.getElementById('s2boxes');
let search = document.getElementById('search');
let sortt = document.getElementById('sort');
let info = [];


function getDataJson(){
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>{
        s2boxes.innerHTML = "";
        info= info.length ? info:data;
        info.forEach(item=>{
            s2boxes.innerHTML +=`
            <div class="box1">
              <div class="img">
                <img src="${item.image}"/>
              </div>
              <div class="text">
                <p>${item.name}</p>
                <h5>${item.price}</h5>
            
              </div>
            </div>`
        })
        sortt.addEventListener("change",(e)=>{
            if(e.target.value == ('a-z')){
                info = info.sort((a,b)=>a.name.localeCompare(b.name))
            }else if(e.target.value == ('z-a')){
                info = info.sort((a,b)=>b.name.localeCompare(a.name))
            }else{
                info = []
            } getDataJson()
        })
        search.addEventListener('input',(e)=>{
            let filter = data.filter((el)=>{
                return el.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            })
            s2boxes.innerHTML ="";
            filter.forEach((elem)=>{
                s2boxes.innerHTML+=`
                <div class="box1">
                <div class="img">
                  <img src="${elem.image}"/>
                </div>
                <div class="text">
                  <p>${elem.name}</p>
                  <h5>${elem.price}</h5>
                </div>
              </div>
                `
            })
        })
    })
}getDataJson()

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let navbar = document.querySelector('.navup');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}