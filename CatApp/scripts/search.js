
let search  = document.querySelector("#searchbar")
console.log(search)
search.addEventListener("change",(e)=>{
    e.preventDefault()
   getdata()

})


const getdata =async ()=>{
    console.log(search.value)
    let res = await  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${search.value.trim()}&api_key=live_X9GSrM11b3hJLAUACKg1yreloctMxg7fhG3PGq98zWUrAWtQWar9l5c6aRYvxRvJ`)
     let data  = await res.json();
     console.log(data)
     let container = document.querySelector("#container")
     container.innerHTML=null
     data.map((ele)=>{ 
     
  
      let div = document.createElement("div")
      div.setAttribute("id","card")
      
      let img = document.createElement("img")
      img.src =ele.url
      img.addEventListener("click",()=>{
          let d = []
          d.push(ele)
          console.log(d)
          localStorage.setItem("data",JSON.stringify(d))
        //   window.location.assign("./cat.html")
  
      })
      div.append(img)
      container.append(div)
  
     })
  
  
  }
  
//  getdata()