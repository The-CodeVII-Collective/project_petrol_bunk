const express = require('express');
const quantifuel = express()

quantifuel.get('/api', (req, res) => {
    res.send('Welcome to QuantiFuel!')
});

quantifuel.get('/api/initTrans', (req, res) => {
    res.send({
        "trans_id": "01nhhhad193b1hd8212b",
        "pump_id": "sh113b1i",
        "bunk_id": "asdh112312j",
        "bunk_loc_coords": "123123-1231233-4556435-3454634",
        "isMultiFuelType": 0,
        "fuel_types": ["petrol"],
        "user_id": "1021123447",
        "user_loc_coords": "1012313-2112312-1231123-3244234"
    })
})

quantifuel.listen(3000, () => {
    console.log('Server is running on port 3000')
})