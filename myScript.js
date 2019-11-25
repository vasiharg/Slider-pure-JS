var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        function getRandomIndex() {
            var random = Math.random();
            return Math.floor(random * myArr.length) + 1;
        }

        var myArr, randNum, imgList = [];
        myArr = JSON.parse(this.responseText);


        for (var i = 0; i < 10; i++) {
            var randNum = getRandomIndex();
            var randImage = myArr[randNum];
            var imgUrl = `https://picsum.photos/200/300?image=` + randImage.id;
            var imgObject = `<div id="auth">${randImage.author}</div>` + `<img id="slide-${i}" src=${imgUrl} alt = ${randImage.author}>`;

            imgList.push(imgObject);

        }

        //        console.log(imgList);
        var para2 = document.getElementById('second');
        para2.innerHTML = imgList[0];

        document.addEventListener('keyup', moveSlide);

        let indexNum = 1;

        function moveSlide(e) {
            const keyName = e.key;
            if (keyName === 'ArrowRight') {

                if (indexNum < imgList.length) {
                    para2.innerHTML = imgList[indexNum];
                    indexNum++;
                } else if (indexNum = -1) {
                    indexNum = 1;
                }
                console.log(indexNum);

            } else if (keyName === 'ArrowLeft') {

                if (indexNum < imgList.length) {
                    para2.innerHTML = imgList[indexNum];
                    indexNum--;
                } else if (indexNum = -1) {
                    indexNum = imgList.length;
                }
                console.log(indexNum);
            }
        }

    };
};
request.open("GET", "https://picsum.photos/list");
request.send();
