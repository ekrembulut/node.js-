const { readFile , writeFile}  = require('fs').promises;

// Aşağıdaki iç içe geçmiş callback hell in kısa çözümü 

const veriOku = async () => {
    try {
    const firstOne = await readFile('./content/first.txt', 'utf8');
    const secondOne = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/write-file.txt', firstOne + secondOne, {flag : "a"});    
}
    
    catch (err) {
        console.log("Sorun bulundu : " +  err)
    }
}




function halo() {
    readFile ('./content/first.txt', 'utf8', async(err, data) => {
        if(err) {
            console.log(err)
        }
           return firstOne = data;             
    })
}

await readFile('./content/second.txt', 'utf8', async(err, data) => {
    if(err) {
        console.log(err)
    }
    await data;
        secondOne = data;
})

writeFile(
    './content/write-file2.txt',
    `Here is results :  ${firstOne} ${secondOne}`,
    (err) => {
        if(err) {
            console.log(err)
        }
    }
)

readFile(
    './content/first.txt',
    'utf8',
    (err, data) => {
        if(err) {
            console.log(err)
        }
        const first = data;
        readFile(
            './content/second.txt',
            'utf8',
            (err, data) => {
                if(err) {
                    console.log(err)
                }
                const second = data;
                writeFile(
                    './content/write-file1.txt',
                    `Here is results :  ${first} ${second}`,
                    (err) => {
                        if(err) {
                            console.log(err)
                        }
                    }
                )
            }
            
        )
    }
   
)