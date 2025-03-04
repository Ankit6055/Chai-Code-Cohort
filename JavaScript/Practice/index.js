const obj = [{ 
    "sentence": "This island is far beyond the images you see online",
    "topic": "the image",
    "sentiment": "POSITIVE",
    "score": 0.9040651917457581 
},
{ 
    "sentence": "From arriving in Malle you are ushered into the private Luxe lounge to await your seaplane.",
    "topic": "seaplane",
    "sentiment": "POSITIVE",
    "score": 0.9949505925178528 
}, 
{ 
    "sentence": "relaxing facilities are at you disposal, cannot comment further as fortunately our seaplane was ready for us to board shortly after arriving.",
    "topic": "seaplane,disposal", 
    "sentiment": "NEGATIVE",
    "score": 0.9940604567527771 
} 
];

const paraValue = document.getElementById('para');

let paraContent = paraValue.innerHTML;


obj.forEach((obj) => {
    let sentence = obj.sentence.trim();

    if (paraContent.includes(sentence)) {
        console.log(sentence);
        paraContent = paraContent.replace(new RegExp(sentence.split(/\s+/)[0], 'i'), `<span style="background-color: green">${sentence}</span>`);        
    }
    paraValue.innerHTML = paraContent;
})


