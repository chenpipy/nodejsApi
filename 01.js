/**
 * Created by Administrator on 2017/4/26.
 */
var express=require('express');
var app=express();
app.get('/student/:id',function (req,res) {
    var id=req.params['id'];
    res.send(id);
});
app.listen(3000);
