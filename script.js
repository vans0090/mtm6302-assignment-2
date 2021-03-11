const $gallery = document.getElementById('container')
const $display= document.getElementById('display')

let images = []

for (let i = 1 ; i <= 12; i++ ) {
    images.push(`<img src="/images/${i}.jpg" width="50%" height="95%" class="image">`)
}

$gallery.innerHTML = images.join('')
console.log(images)
 
// const listoftitles = [
//     `This is the title of image 1`,
//     `This is the title of image 2`,
//     `This is the title of image 3`,
//     `This is the title of image 4`,
//     `This is the title of image 5`,
//     `This is the title of image 6`,
//     `This is the title of image 7`,
//     `This is the title of image 8`,
//     `This is the title of image 9`,
//     `This is the title of image 10`,
//     `This is the title of image 11`,
//     `This is the title of image 12`
// ]

// function displayTitle () {
//     for ( let i = 0; i < 12; i++) {
//         return $display.textContent = listoftitles[i]
//     }
// }

// $gallery.addEventListener ('click', displayTitle)

$gallery.addEventListener ('click', function (event){
    const $image = event.target.closest('.image') 

    if ($image) {
        $image.classList.toggle('largeimage')
    }
})

$gallery.addEventListener ('dblclick', function (event){
    const $image = event.target.closest('.image') 

    if ($image) {
        $image.classList.toggle('largeimage')
    }
})

