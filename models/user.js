/**
 * Created by yuxh on 2014/12/6.
 */
var client = require('../databases');

function User(user){
    this.name = user.name;
    this.password = user.password;
};
module.exports = User;
var tableName = "user";
mysql = client.getDbCon();

User.prototype.save = function save(callback){
    var user = {
        name: this.name,
        password: this.password
    };
    var sql ="insert into user (name,password) values(?,?)";
    mysql.query(sql,[user.name,user.password],function(err,fields){
        if (err) {
            throw err;
        } else {
            //返回用户id
            return callback(err, fields);
        };
    });
};

User.get =  function  get(username, callback) {

    // 读取 users 集合
    var sql = "select c.id,c.name,c.password from user c where c.name='"+username+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results[0]);
            callback(err,results[0],fields);
        }
    })

};