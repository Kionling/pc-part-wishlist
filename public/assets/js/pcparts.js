$(function() {
$(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var pcstatus = $(this).data("status");

    var pcstatusState = {
        pcpart: pcstatus
    };

    $.ajax("/api/pcparts/" + id, {
        type: "PUT", 
        data: pcstatusState
    }).then(
        function() {
            console.log("Changed purchase status to", pcstatus);
            location.reload();
        }
    );
});


$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newItem = {
        name: $("#pa").val().trim(),
        pcpart: $("[name=pcpart]:checked").val().trim()
    };

    $.ajax("/api/pcparts/", {
        type: "POST",
        data: newItem
    }).then(
        function () {
            console.log("Added new pcpart!")

            location.reload();
        }
    );
});

$(".delete-part").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/pcparts/" + id, {
        type: "DELETE"
    }).then(
        function() {
            console.log("Deleted part!", id);
            location.reload();
        }
    );
});



})