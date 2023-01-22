// navigation start 

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
    navToggle.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    })
});

// navigation end
const catsData = [{
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused.jpeg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.jpeg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy.jpeg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia1.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.jpeg",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nervous.jpeg",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry.gif",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry2.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused2.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry2.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insomnia2.gif",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "lazy.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relaxed2.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nervous.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "nervous2.gif",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    },
]

// catsData

const emotionRadios = document.getElementById('emotion-radios')
const mdlCloseBtn = document.getElementById('meme-modal-close-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const getImageBtn = document.getElementById('get-image-btn')
const memeModal = document.getElementById('meme-modal')
const modalInner = document.getElementById('meme-modal-inner')

emotionRadios.addEventListener('change', radiosControl)

getImageBtn.addEventListener('click', renderCat)

mdlCloseBtn.addEventListener('click', closeModal)


function closeModal() {
    memeModal.style.display = 'none'
}

function radiosControl(e) {
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked

        const matchingCatArray = catsData.filter(function(cat) {
            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            } else {
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCatArray
    }

}

function getSingleCatObject() {
    const catsArray = getMatchingCatArray()
    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }

}

function renderCat() {
    const catObject = getSingleCatObject()
    modalInner.innerHTML = `<img 
    class="cat-img" 
    src="./img/memeimg/${catObject.image}"
    alt="${catObject.alt}">`
    memeModal.style.display = 'flex'
}

function getCatsEmotionArray(cats) {
    const catsEmotionArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            // catsEmotionArray.push(emotion)
            if (!catsEmotionArray.includes(emotion)) {
                catsEmotionArray.push(emotion)
            }
        }
    }
    return catsEmotionArray
}

function renderCatsEmotions(cats) {
    let radiosItems = ``
    const emotions = getCatsEmotionArray(cats)
    for (let emotion of emotions) {
        radiosItems += `<div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" id="${emotion}"
        value="${emotion}"
        name="emotions"></div>`
    }
    emotionRadios.innerHTML += radiosItems
}

renderCatsEmotions(catsData)

//      Cookie Consent

const modal = document.getElementById('cookie-modal')
const modalCloseBtn = document.getElementById('cookie-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('cookie-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('cookie__choice--btns')

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="img/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(function() {
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)


    setTimeout(function() {
        document.getElementById('cookie-inner').innerHTML = `
        <h4>Thanks <span class="modal-display-name">${fullName}</span>, you loose!</h4>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="img/pirate.gif">
        </div>
    `
        modalCloseBtn.disabled = false
    }, 3000)

})