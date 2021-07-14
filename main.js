const arr = [{
        heading: "The Beginnings",
        story: "I started out by first sketching my favourite music artist <span class='text-bhavik'>Anita</span>",
        body: "anitaOld.png",
        id: "anitaOld"
    },
    {
        heading: "The Learning Phase",
        story: "I used reference images to get an idea of the directional poses, and tried to draw the famous youtuber <span class='text-bhavik'>Lele Pons</span>",
        body: "lelePons.png",
        id: "lelePons"
    },
    {
        heading: "The First Competion",
        story: "To try out my newly learned skills, I took part in my College's annual event and drew Lily Singh to symbolize powerful women. I got nominated for <span class='text-bhavik'>Student of The Year</span>",
        body: "lillySingh.png",
        id: "lillySingh"
    },
    {
        heading: "The Learning Phase Continues",
        story: "Then I experimented with face structure and effect of lighting by drawing the gorgeous singer <span class='text-bhavik'>JLO</span>",
        body: "jlo.png",
        id: "jlo"
    },
    {
        heading: "Trying Something Else",
        story: "After somewhat perfecting female faces, I shifted towards male ones and conceptulized the handsome <span class='text-bhavik'>Tyler Hoechlin</span>",
        body: "tylerHoechlin.jpeg",
        id: "tylerHoechlin"
    }
]


const additonalContent = {
    Abstract: [{
            img: "abstractLiberation.jpeg",
            title: "Liberation"
        },
        {
            img: "elephant.jpg",
            title: "Beauty In Beast"
        },
        {
            img: "blinded.jpg",
            title: "Blinded"
        },
        {
            img: "flamingo.jpg",
            title: "King Lagoona"
        },

    ],
    Paintings: [

        {
            img: "woman.jpg",
            title: "Woman",
            class: "col-lg-6 col-md-6"
        },
        {
            img: "flowers.jpg",
            title: "Flowers",
            class: "col-lg-6 col-md-6"
        },

    ],
    Portraits: [{
            img: "bellaHadid.jpeg",
            title: "Bella Hadid"
        },
        {
            img: "cardiB.jpeg",
            title: "CardiB"
        },
        {
            img: "scarletJohansen.jpeg",
            title: "Scarlet Johansen"
        },
        {
            img: "stephenAmell.jpg",
            title: "Stephen Amell"
        }
    ],


}



const createTimeline = () => {
    arr.forEach((block, i) => {
        //timelineDiv
        let timeLineBlock = ``

        if (i % 2 == 0) {
            timeLineBlock =
                `<div class="timeline-block timeline-block-right" id="` + block.id + `">
                    <div class="marker"></div>
                    <div class="timeline-content-right">
                        <h3>` + block.heading + `</h3>
                        <img src="./images/` + block.body + `" class="img-fluid img-border"></p>
                        <h5 class="text-white">` + block.story + `</h5>
                    </div>
                </div>
                `
        } else {
            timeLineBlock =
                `<div class="timeline-block timeline-block-left" id="` + block.id + `">
                <div class="marker"></div>
                <div class="timeline-content-left">
                    <h3>` + block.heading + `</h3>
                    <img src="./images/` + block.body + `" class="img-fluid img-border"></p>
                    <h5 class="text-white">` + block.story + `</h5>
                </div>
            </div>
            `
        }

        $('#timelineDiv').append(timeLineBlock)
    })

}

const createAdditonalContent = () => {

    for (let prop in additonalContent) {

        let row = `<div class="container-fluid mt-3">
                        <h2 class="text-white mb-5 underline">` + prop + `</h2>
                        <div class="row" id="` + prop + `">      
                        </div>
                    </div>`
        $('#additonalContent').append(row)
        additonalContent[prop].forEach((element) => {
            let clss = "col-lg-3 col-md-6"
            if (element.class) {
                clss = element.class
            }
            let col = `
                    <div class="` + clss + ` text-center mb-3">
                    <img src="./images/` + element.img + `" class="img-fluid img-border"></p>
                    <h3 class="text-white">` + element.title + `</h3>
                    </div>
                    `
            $('#' + prop).append(col)
        })
    }

}