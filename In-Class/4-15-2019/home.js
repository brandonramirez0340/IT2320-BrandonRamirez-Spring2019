$(function(){
    
    //Cross Origin Resource Sharing
    //Uses script tag instead of XMLHTTPRequest Object to override the same origin policy
    //JSONP => JSON with padding

    /**************************************************************************************************
     * #1 flikr feed url 
     * //https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags=cats
     * 
     * ***********************************************************************************************/
    
    $("#btn1").on("click", function(){
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags=" + $("#photosearch").val();
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp", // Needed for CORS
            contentType: "application/json; charset-utf-8",
            crossDomain: true,
            success: function(data){
                console.log(data);
                $("#flikrresults img").remove();
                $.each(data.items, function(i, item){
                    var source = item.media.m;
                    var img = $("<img src='" + source + "'>");
                    $("#flikrresults").append(img);
                });
            }
        });
     });

    /***************************************************************************** 
    #2 Go to https://www.petfinder.com/developers/api-key to get an api key
    Add the API key to the URL
    Sample URL:
    http://api.petfinder.com/breed.list?format=json&key=key&callback=?&animal=cat
    
    *******************************************************************************/
   
   $("#btn2").on("click", function(){
        var url = "http://api.petfinder.com/breed.list?format=json&key=551b527add03634ac3a95a7a967367e6&callback=?&animal=" + $("#breedsearch").val();
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp",
            contentType: "application/json; charset-utf-8",
            crossDomain: true,
            success: function(data){
                console.log(data);
                $("#breedresults p").remove();
                $.each(data.petfinder.breeds.breed, function(i, item){
                    var source = item.$t;
                    var breed = $("<p> - " + source + "</p>");
                    $("#breedresults").append(breed);
                });
            }
        });
    });
});