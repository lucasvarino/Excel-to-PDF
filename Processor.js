class Processor {
    static Process(data){
        const lines = data.split("\r\n");
        const rows = [];

        lines.forEach(row =>{
            const array = row.split(",");
            rows.push(array);
        });
        return rows;
    };
}

module.exports = Processor;