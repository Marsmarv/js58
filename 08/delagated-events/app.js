$(function(){

  var $favList = $('#fav-list')

  $favList.on('mouseenter', 'li', function(e){
    console.log(e.pageX, e.pageY);
    $(this).addClass('hover');
  })


  // $('#fav-list li a').on('click', function(e){
  $favList.on('click', 'li a', function(e){
    console.log(e.pageX, e.pageY);
    $(this).removeClass('hover');
    // $(this).parent().siblings().remove();
  	

  })

  var $elem = $('<li><a href="#">Hurfdurf</a></li>');
  $favList.append($elem)
})










// $(function(){

// 	var $favlist = $('#fav-list')

// 	$favlist.on('mouseenter', 'li', function(e){
// 		console.log(e.pageX, e.pageY);
// 		$(this).addClass('hover');
// 	})

// 	// $favlist.on('mouseleave', 'li.chicken', function(e){
// 		$favlist.on('click', 'li a', function(e){
// 		console.log(e.pageX, e.pageY);
// 		$(this).removeClass('hover');
// 		$(this).remove();


// 	})

// 	var $elem = $('<li><a href="#">Hurfdurf</a></li>')
// 	$favlist.append($elem)
// })