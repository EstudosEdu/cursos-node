let btnViewIMG = document.querySelector('.download-img');
let btnViewPDF = document.querySelector('.download-pdf');

let testImg = document.querySelector('.testImg');

fetch('http://localhost:3333/Download/img',
{
    method: 'GET',
})
.then((res) => {
    res.blob().then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL);
        btnViewIMG.href = objectURL;
        testImg.src=objectURL
    })
});

fetch('http://localhost:3333/Download/pdf',
{
    method: 'GET',
})
.then((res) => {
    res.blob().then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL);
        btnViewPDF.href = objectURL;
    })
});
let data = {
    "email": "ddzadravec@gmail.com",
    "isMobile": true
}

function dowloadZip(){
    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((res2) => {
        fetch('http://localhost:8000/kid/kidTag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: res2.token
            },
            body: JSON.stringify({"id": [2, 4]})
        })
        .then(async (resFile) => await resFile.blob())
        .then((newBlob) => {
            let blobFile = new Blob([newBlob], {type: 'application/zip'})
            criaLink(blobFile)
        })
    })
}

function criaLink(blobFile){
    let urlFile = window.URL.createObjectURL(blobFile);
    let link = document.createElement('a');
    
    link.href = urlFile;
    link.download = 'pdfs.zip';
    link.click();
    setTimeout(() => { window.URL.revokeObjectURL(urlFile); }, 250);
}