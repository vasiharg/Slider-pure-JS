$(document).ready(function () {

    function getRandomIndex() {
        var random = Math.random();
        return Math.floor(random * jsonResult.length);
    }

    var jsonResult, imagesElements, i;
    imagesElements = "";

    $.get('https://picsum.photos/list').done(function (data) {
        jsonResult = data;
    }).then(function () {

        for (let i = 0; i < 10; i++) {
            let randomIndex = getRandomIndex();
            let randomImage = jsonResult[randomIndex];
            let randomImageUrl = `https://picsum.photos/200/300?image=${randomImage.id}`;
            let fgCaption = `by ${randomImage.author}`;

            let imageElement = `<figure class="slide-${i}"> <div class="text">${fgCaption}</div> <img id=${i} src="${randomImageUrl}" alt="${randomImage.author}">  </figure>`;

            imagesElements = imagesElements + imageElement;
        }

        $("#slider-container").append(imagesElements);

    
    });


});
