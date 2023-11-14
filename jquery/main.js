$(document).ready(function(){
    $("form").on("submit",function(e){ 
        e.preventDefault();
        const tarefa = $("#tarefa").val();
        const novatarefa = $(`<li></li>`);
        $(`<h2>${tarefa}</h2>`).appendTo(novatarefa);
        $(novatarefa).appendTo("ul");
    })
})


$("ul").on("click","li",function(){$(this).toggleClass("linha")})
