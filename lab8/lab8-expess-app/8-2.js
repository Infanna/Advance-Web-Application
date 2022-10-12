var expressFunction = require('express')
var expressApp = expressFunction()

const students = [
                {stdid: 'B6201920', name: 'Patcharachart Jirasrisopa'},
                {stdid: 'B6200000', name: 'fewza fewlnw'}
                ]

expressApp.get('/api/resource/students/:stdid', function (req, res) {
    const stdid = req.params.stdid;
    if(stdid == 'B6201920'){
        res.status(200).send(students[0]);
    }else if(stdid == 'B6200000'){
        res.status(200).send(students[1]);
    }else{
        res.status(404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function(){
    console.log('Listening on port 3000')
})