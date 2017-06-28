$(function(){
    $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=8917ec464771409c9f810cbacb0b341b", function(results){
  console.log(results);
  results.articles.forEach(function(result){
    console.log(pageUrl);
      var pageUrl = result.url
      var title = '<a href='+ pageUrl +'>' +result.title+ '</a';
      var description = result.description;
      var img = result.urlToImage;

      var li = $('<li>'+'</li>');
      var li2 = li.append('<img style="width:50px;height:50px" src=' + img +'>');
      li2.append('<span> Title: '+title+'<br>'+ "Description: "+description+'<br>'+'</span>');
      $("#feed").append(li);

    })
  })
})



// '<a href='+ pageUrl +'>' +result.title+ '</a'
// '<span a href=' +pageUrl+ '>' 'Title: ' +title+ '<br>' + "Description: " +description+ '<br>' + '</span>'
