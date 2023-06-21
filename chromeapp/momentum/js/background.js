const images = ["홍은채1.jpeg", "홍은채2.jpeg", "홍은채3.jpeg", "홍은채4.jpeg", "홍은채5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
