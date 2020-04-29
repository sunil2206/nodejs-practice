$(document).ready(function(){

    $('form').on('submit',function(){

        var items=$('form input');
        var todo={item: items.val()};

        $.ajax({
            type:'POST',
            url:'/todo',
            data: todo,
            success:function(data) {
                location.reload();
            }
        });
    });

});