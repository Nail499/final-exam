let form = document.querySelector('form');
let imgInput = document.querySelector(".imginp");
let nameInp = document.querySelector('#nameinp');
let pricInp = document.querySelector('#pricinp');
let table = document.querySelector('table');
let savebtn = document.querySelector('#savebtn');
let roundedimg = document.getElementById('roundedimage')


imgInput.addEventListener("input",(e)=>{
    
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = function(){
            roundedimg.src = reader.result
    }
}})



savebtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (imgInput.value != "" && nameInp.value != "" && pricInp.value != "") {
        axios.post(`http://localhost:3000/products`,{
            image: roundedimg.src,
            name: nameInp.value,
            price: pricInp.value,
        })}else{
            alert("Bos saxlamaq olmaz")
        }
        window.location = './index.html';
           
    }



    )

    
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    table.innerHTML += `
                    <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                <td>${element.price}</td>
                   <td><button onclick = "deleteItem(${element.id})">DELETE</button></td>
                </tr>`
                })
            })
    
    
    
    function deleteItem(id) {
        axios.delete(`http://localhost:3000/products/${id}`)
        window.location.reload();
    }


