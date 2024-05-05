let prevBtn = document.querySelector(".btn-prev");
let nextBtn = document.querySelector(".btn-next");
let img = document.querySelector(".content > img");
let data = [
  "./assets/img/pexels-souvenirpixels-417074.jpg",
  "./assets/img/pexels-photo-620337.jpeg",
  "./assets/img/pexels-mikebirdy-126271.jpg",
  "./assets/img/pexels-rick-otten-41368-983988.jpg",
  "./assets/img/pexels-pixabay-208321.jpg",
];
let num = 0;

nextBtn.onclick = function () {
  num++;
  if (num >= data.length) {
    num = 0;
    img.attributes.src.value = data[num];
  } else {
    img.attributes.src.value = data[num];
  }
};

prevBtn.onclick = function () {
  num--;
  if (num < 0) {
    num = data.length - 1;
    img.attributes.src.value = data[num];
  } else {
    img.attributes.src.value = data[num];
  }
};
