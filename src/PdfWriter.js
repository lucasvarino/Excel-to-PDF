const pdf = require('html-pdf');

class PdfWriter {
    static WritePdf(filename, html){
        pdf.create(html,{}).toFile(filename, (error) => console.log(error));
    }
}

module.exports = PdfWriter;