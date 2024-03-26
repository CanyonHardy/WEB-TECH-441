$(document).ready(function () {
    $("button").click(function () {
        $("#mikoInformation").load("data/miko.json", function(responseText){
            var miko = JSON.parse(responseText);
            $("#mikoInformation").html("birthday" + miko.birthday
        + "<br>region:" + miko.region + "<br>First Name:" + miko.name.firstName + "<br>Last Name:" 
        + miko.name.lastName + "abilities" +
        miko.abilities[0] + "<br>" + miko.abilities[1] + "<br>" + miko.abilities[2] + "<br>" + miko.abilities[3]);
        });
    });
});
