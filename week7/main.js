var myViewFinderArray = [];

class ViewFinder {
    constructor(title, imageUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
    }
}

function initializeArray() {
    var myViewFinder = new ViewFinder("Beach Combing", "../images/beach.jpg");
    var myViewFinder1 = new ViewFinder("So What", "../images/so.jpg");

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
