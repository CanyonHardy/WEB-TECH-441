var myViewFinderArray = [];

class ViewFinder {
    constructor(title, imagePath, author, date ) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = author;
        this.date = date;
    }

    toString() {
        return "Title: " + this.title;
    }

    get theTitle() {
        return this.title;
    }

    get theImagePath() {
        return this.imagePath;
    }
    get theAuthor() {
        return this.author;
    }
    get theDate() {
        return this.date;
    }
}

function initializeArray() {
    var myViewFinder = new ViewFinder("Beach Combing", "./images/beach.jpg", "Reid Moffatt", "8-5-23");
    var myViewFinder1 = new ViewFinder("Trans Rights", "./images/trans.png", "Lollalette", "1-22-23");
    var myViewFinder1 = new ViewFinder("Every lemon will give a child, and theres no way lemons could ever grow.", "./images/lemon.JPG", "Marah Alhoujairi", "9-28-23");
    var myViewFinder1 = new ViewFinder("Our exsistance cannot be erased", "./images/our.jpg", "Chi Nwosu", "1-18-24");
    var myViewFinder1 = new ViewFinder("So what", "./images/so.jpg", "Loputyn", "4-21-23");

    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    
}

function displayImages() {
    initializeArray();
    
    myViewFinderArray.forEach(viewFinder => {
        var container = document.createElement("div");

        var titleElement = document.createElement("h2");
        titleElement.textContent = viewFinder.title;

        var img = new Image();
        img.src = viewFinder.imageUrl;

        container.appendChild(titleElement);
        container.appendChild(img);

        document.body.appendChild(container);
    });
}

// Call the function to display images
displayImages();
