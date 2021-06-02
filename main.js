const grid = document.createElement('div')
grid.setAttribute('class', 'grid')


const img1 = document.createElement('img')
img1.setAttribute('url' , '1.png')
const img2 = document.createElement('img')
img2.setAttribute('url' , '2.png')
const img3 = document.createElement('img')
img3.setAttribute('url' , '3.jpg')
const img4 = document.createElement('img')
img4.setAttribute('url' , '4.jpg')
const img5 = document.createElement('img')
img5.setAttribute('url' , '5.jpg')

const div1 = document.createElement('div')
div1.setAttribute('class', 'zdjecia')

grid.appendChild(div1)
div1.appendChild(img1)
div1.appendChild(img2)
div1.appendChild(img3)
div1.appendChild(img4)
div1.appendChild(img5)