$(document).ready(function () {
    $("button").click(function () {
        $("#mikoInformation").load("data/mikoInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#mikoInformation").fadeOut("slow").fadeIn("slow");
}