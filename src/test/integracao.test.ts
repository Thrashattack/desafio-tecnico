import snap from './familias.snapshot.test';
import axios from 'axios';
import expect from './result.expect.test';

const runTest = (object: any) => {
    axios.post('http://localhost:3001/', object)
    .then(resp => {
        let result: Array<any> = resp.data
        result.forEach((familia: any) => familia.data = "2019-9-2 2:42:00");
        console.log("\n\tStatus: " + resp.status);
        console.log("\n\tResultado:\n" + JSON.stringify(result));
        console.log("\n\tEsperado:\n" + expect);
        console.log("\n\tPassou? " + (expect === JSON.stringify(result)));
    })
} 

const snapObj: any = JSON.parse(snap);
runTest(snapObj)

