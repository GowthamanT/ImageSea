$(document).ready(function(){
   $("#fetch").click(function(event){
        loadFun()
   });
   });
   
   var snippet;
    function loadFun() 
    {
        var g = document.getElementById('pho').innerHTML=" ";           /*To Empty the Page before Loading*/ 
        var a= document.getElementById('val').value;        /*Value from the user to search*/
        $.getJSON(
            "https://pixabay.com/api/?key=16603327-84e09859008f5888512478c0b&q="+a+"&image_type=photo&pretty=true",function(data){
            console.log(data);
            
            /*Values fetching from Json*/
            for (let index = 0; index < 20; index++) 
            {
                snippet = formSnippet(data.hits[index]);
                $('#pho').append(snippet);
            }
            
            /*For creating cards in Display*/
            function formSnippet(det) {
                snippet = "<div class='card shadow-lg p-1 mb-4' style='border-radius:12px border:0px'> <img src="+det.webformatURL+" class='card-img-top' style='border-radius:10px 10px 1px 1px;'> <div class='card-body'> <span><b> <i class='fas fa-heart'></i> </b></span>"+det.favorites+ " <span class='float-right'><b> <i class='fas fa-thumbs-up'></i> </b> "+det.likes+" </span> <br> <span> <i class='fas fa-eye'></i> "+det.views+" </span> </div> </div>"
                return snippet
            }

        });
        
    }
    