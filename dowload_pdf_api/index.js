import express from 'express';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import cors from 'cors';
import { writeFileSync } from 'fs';
const app = new express();
app.use(express.json());
app.use(cors());

const data =     {
    id: 4,
    name: "Dafne",
    city: "Porto Calvo",
    state: "AL",
    mother: "Fabiana",
    birthDate: "1987-08-14 00:00:00",
    sizeShirt: "50", // camiseta
    sizeShoe: "50", // sapato
    sizePants: "44" // calça
};

app.get('/Download/pdf', async (req, res) => {
    // let pdf = await createPdf(data);
    // writeFileSync('./output.pdf', pdf);

    res.download('./output.pdf');
});

app.get('/Download/img', async (req, res) => {
  // let pdf = await createPdf(data);
  // writeFileSync('./output.pdf', pdf);

  res.download('./lambo.png');
});


//cacl of age
function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }
  
async function createPdf(
    {
      id,
      name,
      city,
      state,
      mother,
      birthDate,
      sizeShirt,
      sizeShoe,
      sizePants
    }
  ) {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 16;
  
    page.drawText('Dados Pessoais', {
      x: 10,
      maxWidth: width - (width / 2) - 10,
      y: height - 1.5 * fontSize,
      size: fontSize * 1.5,
      font: timesRomanFont,
    });
  
    page.drawText(`Nome: ${name}`, {
      x: 10,
      maxWidth: width - (width / 2) - 10,
      y: height - 1.5 * fontSize * 2,
      size: fontSize,
      font: timesRomanFont,
    });
    
    page.drawText(`Idade: ${calcAge(birthDate)} anos`, {
      x: 10,
      maxWidth: width - (width / 2) - 10,
      y: height - 1.5 * fontSize * 3,
      size: fontSize,
      font: timesRomanFont,
    });
    
    page.drawText(`Nome da Mãe: ${mother}`, {
      x: 10,
      maxWidth: width - (width / 2) - 10,
      y: height - 1.5 * fontSize * 4,
      size: fontSize,
      font: timesRomanFont,
    });
    
    page.drawText(`Cidade: ${city} , Estado: ${state}`, {
      x: 10,
      maxWidth: width - (width / 2) - 10,
      y: height - 1.5 * fontSize * 5,
      size: fontSize,
      font: timesRomanFont,
    });
    
    page.drawText('Medidas Pessoais', {
      x: 10,
      y: height - 1.5 * fontSize * 7,
      size: fontSize * 1.5,
      font: timesRomanFont,
    });
  
    page.drawText(`Nº Camiseta: ${sizeShirt}`, {
      x: 10,
      y: height - 1.5 * fontSize * 8,
      size: fontSize,
      font: timesRomanFont,
    });
    
    page.drawText(`Nº Sapato: ${sizeShoe}`, {
      x: 10,
      y: height - 1.5 * fontSize * 9,
      size: fontSize,
      font: timesRomanFont,
    });
  
    page.drawText(`Nº Calça: ${sizePants}`, {
      x: 10,
      y: height - 1.5 * fontSize * 10,
      size: fontSize,
      font: timesRomanFont,
    });
  
    const pdfBytes = await pdfDoc.save()
    return pdfBytes;
    // writeFileSync(`./pdfs/output_${id}.pdf`, pdfBytes);
  }


app.listen(3333, () => console.log('server on!, http://localhost:3333/pdf'));