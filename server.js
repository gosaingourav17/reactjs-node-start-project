const express=require('express');
const app=express();
app.get('/api/customers',(req,res) =>{
const customers=[

    {id:1,firstName:'akshay',lastName:'Kumar'},
    {id:2,firstName:'sharukh',lastName:'Khan'},
    {id:3,firstName:'ranveer',lastName:'Singh'}
];
res.json(customers);
});
const port=5000;
app.listen(port,() => console.log("server started on port ${port}"));