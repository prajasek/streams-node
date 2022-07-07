const { Transform, Stream } = require('node:stream');
const fs = require('fs');



const stream = Stream.Readable({objectMode: true});   /* 1 */
stream._read = () => {};     

console.log(Transform)

t = new Transform({
    transform(chunk, encoding, callback) {
        console.log(chunk)
        callback(null, chunk.toString())
    },
   objectMode:true
})
stream.push({a: console.log})
stream.pipe(t).pipe(process.stdout)

// var fs = require('fs')
// var { parse:csvParse } = require('csv-parse')
// let a=[];
// f = fs.createReadStream('test.txt')
//     //.pipe(csvParse({ auto_parse: true }))
//     .on('data', function(record) {
//         x=((record));
//        // console.log(x)
//     })

// f.on('readable', () => {
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
//     console.log(f.read(1))
    
// })