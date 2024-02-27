
document.getElementById("form-container").addEventListener("submit", function(event){
   
    event.preventDefault()

        
             let title = document.getElementById("input-text").value
             let body = document.getElementById("input-body").value

     let blogData = {
        title: title,
        body: body
     }

     let option = {
        method: "POST",
        body: JSON.stringify(blogData),
        Headers:{
            "Content-Type": "application/json"
        }
     }

             fetch("https://apis.scrimba.com/jsonplaceholder/posts", option)
            .then(request => request.json())
            .then(posts => {
            
               document.getElementById("blogArea").innerHTML = `
                 <h2>${title} <h2>
                 <h4>${body}</h4>
                 <br> <hr> <br />
                 ${document.getElementById("blogArea").innerHTML}
               `
            
               document.getElementById("input-text").value = " "
               document.getElementById("input-body").value = " "
            
    
     
    })
 
}) 


//fav icon cdn
 