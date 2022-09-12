const getdata =async ()=>{
  let res = await  fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_X9GSrM11b3hJLAUACKg1yreloctMxg7fhG3PGq98zWUrAWtQWar9l5c6aRYvxRvJ")
   let data  = await res.json();
   console.log(data)
   data.map((ele)=>{ 
    let container = document.querySelector("#container")


    let div = document.createElement("div")
    div.setAttribute("id","card")
    
    let img = document.createElement("img")
    img.src =ele.url
    img.addEventListener("click",()=>{
        let d = []
        d.push(ele)
        console.log(d)
        localStorage.setItem("data",JSON.stringify(d))
        window.location.assign("./cat.html")

    })
    div.append(img)
    container.append(div)

   })


}

getdata()