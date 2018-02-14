$(document).ready(function(){

  $("button").click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI="http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal=$(this).text();
    var flickrOptions={
    tags:animal,
      format:"json"
    };

    function displayPhotos(data){
      var photoHtml="<ul>";
      $.each(data.items,function(i,photo){
      photoHtml+='<li class="grid-25 tablet-grid-50">';
        photoHtml+='<a href="'+photo.link+'" class="image">';
        photoHtml+='<img src="'+photo.media.m+'"></a></li>';
      });
      photoHtml+="</ul>";
      $("#photos").html(photoHtml);
    }
    $.getJSON(flickerAPI,flickrOptions,displayPhotos);
  });
});
