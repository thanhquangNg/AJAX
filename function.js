//AJAX GET DATA USING JQUERY
$(document).ready(function() {  
    $.ajax({  
        url: 'https://mevents-api-uploads.s3.amazonaws.com/test/contentsessions.json',  
        type: 'GET',  
        dataType: 'json',  
        success: function(data, textStatus, xhr) {  
            for(var i=0;i<data.length;i++){
                let string = ""
                for(let j=0;j<data[i].chairs.length;j++){
                    string += data[i].chairs[j].academic_title+" "+data[i].chairs[j].firstname+" "+data[i].chairs[j].surname+"<br>"
                    // console.log(string)
                    
                }
                const dateStart = new Date(data[i].starts_at);
                $("div.container").append("<div class='item'><img class='image' src='https://d2t0unnjxes6lt.cloudfront.net/data/web/img/DGN21_LiveIndustry_v3.png' alt=''/><br><p class='room'>"+data[i].room.title+"</p><p class='date'>"+dateStart+"</p><p class='title'>"+data[i].title+
                "</p><p class='name'>"+string+"</p><button class='sitzung'>Sitzung</button><div class='space'></div><button class='ansehen'>Ansehen</button><br></div>")
                // console.log(data[i].room.title);
                // console.log(data[i].chairs.length)
            }
            
                
        
            },  
        error: function(xhr, textStatus, errorThrown) {  
            console.log('Error in Database');  
        }  
    });  
}); 
//get the room name data.room.title   ---ROOM
//data.starts_at ---DATE
//data.tilte ---TITLE
//data[].chairs[].academic_title || firstname || surname
