/**
 * Created by Administrator on 2017/4/28.
 */
var express=require('express');
var app=express();
var db=require('./server/db.js');

app.use(express.static('src'));
app.get('/api/tollgate',function (req,res) {
    db.query('gis_tollgate',['longitude','latitude'],function (err,results) {
        if(err) {
            res.send({'result':'查询错误'});
            return;
        } ;
        res.send(results);
    })
});

app.listen(3000);