d3.json(`/api/veryHigh`).then((data) => {

console.log(data);

d3.json(`/api/High`).then((data2) => {

    console.log(data2);
    
    console.log(data[0].veryhigh + data2[0].high)


    });

});

