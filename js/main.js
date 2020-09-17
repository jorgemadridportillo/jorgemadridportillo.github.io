$(function() {
    
    var button = '<button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-angle-double-left mr-2"></i></button>';
    var iconLeft = '<i class="fa fa-angle-double-left mr-2"></i>';
    var iconRight = '<i class="fa fa-angle-double-right mr-2"></i>';
    var iconContent = iconLeft;
    
    function loadPage(page) {
        $.ajax(page).done(function(data) {
            $('#content').fadeTo(400, 0, function(){ 
                $(this).html(button + data).fadeTo(400, 1);
                 // Sidebar toggle behavior
                $('#sidebarCollapse').on('click', function() {
                    $('#sidebar, #content').toggleClass('active');
                    if(iconContent == iconLeft) {
                        iconContent = iconRight;           
					} else {
                        iconContent = iconLeft;           
					}
                    $(this).html(iconContent);
                });
            });
        }).fail(function(jqXHR) {
            console.log(jqXHR.statusText);
        });
	}

    function loaded(data) {
        $('#content').fadeTo(400, 0, function(){ 
            $(this).html(button + data).fadeTo(400, 1);
                // Sidebar toggle behavior
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar, #content').toggleClass('active');
                if(iconContent == iconLeft) {
                    iconContent = iconRight;           
			    } else {
                    iconContent = iconLeft;           
			    }
                $(this).html(iconContent);
            });
        });
	}

    $(window).on('hashchange',function(){ 
          var page = window.location.hash.substring(1);
          $.get('../content/' + page + '.html', loaded);   
    });
   
    $.fn.loadPage = loadPage;

    /*$('#portfolio').on('click', function() {
        loadPage('../content/portfolio.html');
    });

    $('#music').on('click', function() {
        loadPage('../content/music.html');
    });

    $('#resume').on('click', function() {
        loadPage('../content/resume.html');
    });

    $('#contact').on('click', function() {
        loadPage('../content/contact.html');
    });*/

    var page = window.location.hash.substring(1);
    if(page == '') {
        page = 'portfolio';
        window.location.hash = '#portfolio';
	}
    $.get('../content/' + page + '.html', loaded);   
});
