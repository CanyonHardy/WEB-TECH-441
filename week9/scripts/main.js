let miko = {
    "birthday" : "July 27",
    "region" : "inzuma",
    "name" : {
        "firstName" : "Yae",
        "lastName" : "Miko"
    },
    "abilities" : [
        "normal attack",
        "charged attack",
        "elemental skill",
        "elemental burst"
    ]
}

$(function () {
$("button").click(function () {
    showMikoInfo();
});

});

function showMikoInfo()
{
    $("#CharacterInformation").html("birthday: " + miko.birthday 
    + "<br>region:" + miko.region + "<br>First Name:" + miko.name.firstName + "<br>Last Name:" 
    + miko.name.lastName + "<br>abilities<br>" +
    miko.abilities[0] + "<br>" + miko.abilities[1] + "<br>" + miko.abilities[2] + "<br>" + miko.abilities[3]);
}