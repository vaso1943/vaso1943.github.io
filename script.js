$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").tooltip();
});


$("#btnSelect").click(function (e) {
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " " + "div#answer"

    document.querySelector("#msgLabel").innerHTML = "Cообщение от пользователя " + select.options[select.selectedIndex].innerHTML;


    $(".modal-body").load(url, function (response, status, request){
        document.querySelector(".modal-body>div#answer").id="";
    

        $("#msgBox").modal("show")
    });
});

 