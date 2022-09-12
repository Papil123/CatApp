const getdata =()=>{
 let data  = JSON.parse(localStorage.getItem("data"))
 console.log(data)
   
 let container = document.querySelector("#container")
  
 let img = document.createElement("img")
//  img.setAttribute("id","img")
 img.src = data[0].url

 let div  = document.createElement("div")
 

 let name = document.createElement("h1")
 name.innerText=data[0].breeds[0].name

 let description = document.createElement("p")
 description.innerText="Description : "+ data[0].breeds[0].description

 let temp  = document.createElement("h3")
 temp.innerText ="Temperament : " + data[0].breeds[0].temperament

 let Life = document.createElement("h3")
 Life.innerText="Life-span :"+  data[0].breeds[0].life_span

 let wiki = document.createElement("h3")
 wiki.innerText = "Wikipedia :  "+  data[0].breeds[0].wikipedia_url

 div.append(name,description,temp,Life,wiki)
 container.append(img,div)
}

getdata()