function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Grillby sets the glass he was cleaning down and selects what seems to be the only bottle in the entire restruant, a red bottle with a peculiar spout. He pours it into the glass he set down and slides it towards you as you sit at the bar.<br> As you grab the glass to take a drink, you notice the red 'liquid' is particularly thick.. what do you do?";
        document.getElementById("choice1").innerHTML = "Drink the Suspicious 'liquid'";
        document.getElementById("choice2").innerHTML = "Ask what this is";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Grillby nods and adjusts the buttons on his dress-shirt's sleeves. 'Just flag me down when you need something, okay?' he says with a polite look on his flamey face. After he properly buttons the sleeves closed, he returns to cleaning a glass. ";
        document.getElementById("choice1").innerHTML = "Wait a few minuets until you're settled in, then ask for a drink.";
        document.getElementById("choice2").innerHTML = "Ignore him and start to nap at the bar";
    } else if (choice == 1 && answer1 == "Drink the Suspicious 'liquid'") {
        document.getElementById("story").innerHTML = "You take a sip of the thick red liquid. You choke on it once you realize its.. ketchup. Its sweet and tangy and thick and gross. Grillby looks at you with confusion while you suffer to swallow the 'drink' he kindly poured you. 'is.. is something wrong with the drink?' He asks with a stern look, judgment and confusion on his fiery face. ";
        document.getElementById("choice1").innerHTML = "swallow the ketchup and pretend this is normal";
        document.getElementById("choice2").innerHTML = "spit out the ketchup back into the glass and make a complaint";
    } else if (choice == 2 && answer2 == "Ask what this is") {
        document.getElementById("story").innerHTML = "Grillby sighs when you ask, like a misunderstood artist you offended. He slides the bottle to you that he just poured from, the label clear as day. 'its the strongest stuff you're gunna find around here, I can promise you that.' <br>The bottle label reads: 'Ketchup'.";
        document.getElementById("choice1").innerHTML = "ask for a different drink";
        document.getElementById("choice2").innerHTML = "ask for fries";


    } else if (choice == 1 && answer1 == "Wait a few minuets until you're settled in, then ask for a drink.") {
        document.getElementById("story").innerHTML = "You take off your coat and brush the snow out of your hair. It was a chilly day out, and the warmth of the bar melts your heart as you get all nice and cozy. Grillby notices youve settled and tilts his head at you, as if he was silently asking if you needed a drink now that youre nice and warm. Do you ask for a drink now?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "Nah, just loiter and continue to be cozy :3";
    } else if (choice == 2 && answer2 == "Ignore him and start to nap at the bar") {
        document.getElementById("story").innerHTML = "You rest your head on the bar's wooden surface. You drift off to sounds of glasses clinking and light chatter. Its warm and cozy, and as you begin to fall asleep, you feel a weird sensation on your shoulder. It's like a weird, still, cold hand, but, reaaally boney. Do you dare wake up to see whos touching you?";
        document.getElementById("choice1").innerHTML = "Nah keep snoozing";
        document.getElementById("choice2").innerHTML = "Jolt up to see who just touched you";
    }
    // need to do these
    else if (choice == 1 && answer1 == "swallow the ketchup and pretend this is normal") {
        document.getElementById("story").innerHTML = "You painfully swallow the ketchup and manage to fake a smile at the bartender, doing your best not to make a disgusted face from what you had to do. Grillby stares at you while you struggle, and the flame on the tip of his head flicks back and forth, almost like a dog wagging its tail. 'Sorry for staring- im just.. im.. im glad you enjoyed the drink.' <br>He turns away from your gaze and picks up a dirty glass, seeming a little embarassed. You cant shake the feeling that you are the only person who has managed to drink this before. <h2>Wholesome Ending :3</h2>";
        document.getElementById("choice1").innerHTML = "Attempt to finish the drink slowly, enjoying the warm atmosphere of the resutant.";
        document.getElementById("choice2").innerHTML = "Down the rest of the ketchup as quickly as you can to impress him further";
    } else if (choice == 2 && answer2 == "spit out the ketchup back into the glass and make a complaint") {
        document.getElementById("story").innerHTML = "The bartnender freezes as he sees you spit out his precious drink. His shoulders sink down and you can tell he's disappointed that you didn't enjoy his bartending. He wipes up the ketchup you spat out on the counter with the rag he was using, and takes your glass away while hes at it. <br><br>With a sigh, he starts: 'Sorry. You must not be from around here. Y'see, this is the only beverage we have around Snowden, so it makes sense it's not everyones cup of tea. And speaking of which, we also dont have tea.' He gazes at you and waits for your reply, looking like a tired walmart manager dealing with an outrageous customer.";
        document.getElementById("choice1").innerHTML = "Apologize and try to drink it to make up for offending him";
        document.getElementById("choice2").innerHTML = "Ask for fries";

    } else if (choice == 1 && answer1 == "ask for a different drink") {
        document.getElementById("story").innerHTML = "Grillby faces you as you ask such a ridiculous question. 'Tch. I told you, this is the strongest stuff around, but, wow. You want to go there? Really??' He rolls up his sleeves and walks over to you, still on the other side of the bar. Only inches from your face, you feel the heat flickering off of him, angry, hot, and wild. <br>You've really done it now, asking for a differant drink in this place that clearly only has one bottle on the shelf. He reaches below the bar and you close your eyes, afraid of what he's going to do with you now. ";
        document.getElementById("choice1").innerHTML = "Keep your eyes closed and accept your fate";
        document.getElementById("choice2").innerHTML = "Keep your eyes closed and accept your fate";



    } else if (choice == 2 && answer2 == "ask for fries") {
        document.getElementById("story").innerHTML = "Grillby nods and quickly walks to the back, emerging once again in a few minuets with a classic red and white striped boat full of fries. He sets it in front of you and your glass of ketchup, and you notice a burned hand-shaped mark on the sides of the fryboat. The fries are sizzling hot, with sparkly white flakes of salt and golden crispy edges. You take a good three fries and dunk them in the glass of ketchup, taking a bite. Its delicious.<br> Grillby watches you doing this and chuckles lightly at you. 'That's.. a weird method of drinking, but I mean, you are a bit of a weirdo. Enjoy.' He nods at you politely and attends to another dirty glass with a clean rag.<h2>Good Ending :)</h2>";
        document.getElementById("choice1").innerHTML = "Eat the rest of your fries and enjoy the atmosphere :)";
        document.getElementById("choice2").innerHTML = "Eat the fries and DONT enjoy the atmosphere. Heh. That'll show em. >:)";

    } else if (choice == 2 && answer2 == "Ask for fries") {
        document.getElementById("story").innerHTML = "Grillby nods and quickly walks to the back, emerging once again in a few minuets with a classic red and white striped boat full of fries. He sets it in front of you and your glass of ketchup, and you notice a burned hand-shaped mark on the sides of the fryboat. The fries are sizzling hot, with sparkly white flakes of salt and golden crispy edges. You take a good three fries and dunk them in the glass of ketchup, taking a bite. Its delicious.<br>Grillby watches you chow down and sighs, still appearing to be  disappointed that you couldnt stomach his drink and are rudely cramming fries in it instead. He turns away and starts to attend to a dirty glass, avoiding your presence now.<h2>Bad Ending :(</h2>";
        document.getElementById("choice1").innerHTML = "Eat the rest of your fries and try to enjoy the atmosphere, despite your intense guilt. :/";
        document.getElementById("choice2").innerHTML = "Eat the fries and DONT enjoy the atmosphere. Heh. That'll show em. >:)";



    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Nah, just loiter and continue to be cozy :3") {
        document.getElementById("story").innerHTML = "You decide to spend your time in the bar people watching, staying warm and cozy. You hope Grillby doesn't get upset because you aren't giving him any buisness, but, he seems pretty stoic. You can't get a read on that one. You get so comfortable in the warm and peaceful atmosphere that you end up staying in the bar until closing time. All the other bar go-ers have left and Grillby is almost finished doing all of his closing tasks. He comes up to your seat and leaves a small crumpled piece of slightly burned paper. It reads: <h3>''Please leave. Ive already notified the authorites and if you are caught loitering in this establishment ever again, the royal gaurd will be alerted. This is your final warning.''</h3> You look up at Grillby after you read the note and feel a lump in your throat. He's just staring at you, silently, one hand on the bar and one on his hip. What do you do now?";
        document.getElementById("choice1").innerHTML = "Run out, screaming 'YOULL NEVER CATCH ME!! IM THE MASTER LOITERER! MWUAHAHA!!!'";
        document.getElementById("choice2").innerHTML = "Apologize and walk out like a civilized person.";
    }  else if (choice == 2 && answer2 == "Apologize and walk out like a civilized person.") {
        document.getElementById("story").innerHTML = "You hold onto the small peice of paper with the note on it, looking up at Grillby. You offer him a sincere apology and grab your things, walking into the cold snowy night. You feel super guilty for not giving Grillby any of your buisness for the WHOLE DAY. As you walk into the snowy night, you look at the paper note again. But just now you notice that there seems to be some ink on the backside as well. Curiously you turn it over- and it reads: <h3>''Just kidding. It was nice having such a pretty face in my bar all day. I hope to see you again, feel free to stop by any time. -Grillby''</h3><br></h1>Rare Secret ROMANTIC Ending!! <3 </h1>";
        document.getElementById("choice1").innerHTML = "Skip home happily :3 ";
        document.getElementById("choice2").innerHTML = "never return to Grillby's because you are very un-interested in the fire-man";

      }  else if (choice == 1 && answer1 == "Run out, screaming 'YOULL NEVER CATCH ME!! IM THE MASTER LOITERER! MWUAHAHA!!!'") {
            document.getElementById("story").innerHTML = "You run out of the establishment and into the snowy night. Yet another perfect crime, perfeclty excuted. You pat yourself on the back for another job well done, another heist so flawlessly pulled. For you, and no one else is, <h1>The Loiter Man. </h1><br><h2>Rare Secret CRIMINAL Ending! </h2>";
            document.getElementById("choice1").innerHTML = "Celebrate being the famous 'loiter-man' ";
            document.getElementById("choice2").innerHTML = "+1 Criminal Charge";

    } else if (choice == 1 && answer1 == "Apologize and try to drink it to make up for offending him") {
        document.getElementById("story").innerHTML = "You so desperately want to redeem yourself that you tip the glass to the ceiling and attempt to drink the glass of ketchup. It slowly slides into your mouth in a solid glob- tangy, acidic, and nauseously sweet. Its horrible. You feel sick as you manage to swallow the red clump. You only manage to commit to the swallow because youre so anxious to see Grillby's approval, to get some semblance of redemption for being such a rude customer. But the man wasn't watching you suffer through that drink, because he was serving another bar patron. You feel your heart shatter into pieces, and the aftertaste of ketchup lingers on your tongue.<h2>Worst Ending :(</h2> ";
        document.getElementById("choice1").innerHTML = "Cry";
        document.getElementById("choice2").innerHTML = "Cry harder";


    } else if (choice == 2 && answer2 == "Jolt up to see who just touched you") {
        document.getElementById("story").innerHTML = "Even though your head is heavy with sleepieness, you just can't shake the feeling that someone was there on your right. But when you jolt your head awake and look around, there isn't anyone there. However, the seat next to you had an indent in the cushion and fry crumbs all over it. You feel a little freaked out. You were SURE that some boney hand must have touched you..<br><h2>Mystery Ending..?</h2>";
        document.getElementById("choice1").innerHTML = "...";
        document.getElementById("choice2").innerHTML = "....weird..";

    } else if (choice == 1 && answer1 == "Nah keep snoozing") {
        document.getElementById("story").innerHTML = "You dont care if someone touches you in your sleep. Youre kinda messed up for that but hey I dont judge man. You sleep and sleep until Grillby shakes you awake gently at closing time, and then you go home and sleep even more. Your'e over here taking a nap rn you got a pillow under your head rn, sleeping so soundly, your sleepy as helll man, youre a snoozer man. <br><h2>zzzZZZSleepy EndingzzZZZ</h2>";
        document.getElementById("choice1").innerHTML = "hooonnnk";
        document.getElementById("choice2").innerHTML = "shooooo";


    } else if (choice == 1 && answer1 == "Attempt to finish the drink slowly, enjoying the warm atmosphere of the resutant.") {
        document.getElementById("story").innerHTML = "Grillby once again goes back to cleaning a differant glass. Do you ask for another drink?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Down the rest of the ketchup as quickly as you can to impress him further") {
        document.getElementById("story").innerHTML = "You feel so glad that grillby got some enjoyment out of you trying his drink, you cant help but try to impress him more. You swig the glass above your head and try to chug the thick glob of ketchup. <br>Its a horrible sensation. The ketchup slowly pours from the glass and into your mouth, wet and acidic with a sickeningly sweet taste. You feel sick and horrible, looking at grillby for approval. But the man is staring at you in shock an horror and disgust. He doesn't say a word and tries to avoid looking at you from now on. <h2>Aaaand now its a Bad Ending. </h2> ";
    }

 else if (choice == 2 && answer1 == "Keep your eyes closed and accept your fate") {
    document.getElementById("story").innerHTML = "You're scared. You fear for your life in this moment, but perservere. You peep one of your eyes open to see what the bartender could possibly be reaching for. To your suprise, you see Grillby pulling out a bottle of hot sauce. He takes away your glass of ketchup and replaces it with a fresh glass of hot sauce. 'You know, its a messed up world out there. Im sorry this is the only way the two of us can consume this kind of thing. Just.. dont speak of this again. Okay?' He sighs and a cloud of smoke blows away from his face. You are left with a glass of hot sauce and a lot more questions.<h2>Secret Ending ;)</h2> ";
    document.getElementById("choice1").innerHTML = "Attempt to finish the drink slowly, enjoying the warm atmosphere of the resutant.";
    document.getElementById("choice2").innerHTML = "Try to drink the hot sauce with your mind";
 }
 else if (choice == 2 && answer2 == "Try to drink the hot sauce with your mind") {
    document.getElementById("story").innerHTML = ".. You.. you cant drink hot sauce with your mind, so.. obviously nothing happens, and Grillby once again goes back to cleaning a differant glass. Do you ask for another drink?<h2>Mind Reader Endi- oh nvm.. you .. you couldnt do it. Umm,, umm- umm.. bad ending.</h2>";
    document.getElementById("choice1").innerHTML = "oh.";
    document.getElementById("choice2").innerHTML = "mkay :(";
}
}