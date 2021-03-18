//creating variable to retrieve HTML elements

const $gallery = document.getElementById('container')
const $display= document.getElementById('display')

let images = []   //array to push all the images into one

//loop to add images dynamically into the browser
for (let i = 1 ; i <= 12; i++ ) {
    images.push(`<img src="/images/${i}.jpg" id="${i}" width="50%" height="95%" class="image">`)
}

$gallery.innerHTML = images.join('')
 
// array that stores the list of titles which will be displayed when an image is clicked
const listoftitles = [
    `Image 1: Man with a laptop`,
    `Image 2: Girl by the window`,
    `Image 3: Two boys in a room`,
    `Image 4: Pedestrian crossing in front of a building`,
    `Image 5: Man working on computer`,
    `Image 6: Top glass view of a boy on laptop`,
    `Image 7: Woman working in a corner`,
    `Image 8: Lady Boss tag`,
    `Image 9: Two business-man dicussing over phone`,
    `Image 10: Desk of a worker`,
    `Image 11: Coffee table with a laptop on`,
    `Image 12: Ant's eye view of a building`,
    `Click any image to display the title`
]

//function to display the respective title
function displayTitle (event) {
        $display.textContent = listoftitles[event.target.getAttribute('id')-1]
    }

//adding event listener to the images with the title function
$gallery.addEventListener ('click', displayTitle)


//adding event listener to enlarge te image sizes by using the classes
$gallery.addEventListener ('click', function (event){
    const $image = event.target.closest('.image') 

    if ($image) {
        $image.classList.toggle('largeimage')
    }
})

//adding double click event to return the images back to their normal size
$gallery.addEventListener ('dblclick', function (event){
    const $image = event.target.closest('.image') 

    if ($image) {
        $image.classList.toggle('largeimage')
    }
})

