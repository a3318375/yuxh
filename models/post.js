/**
 * Created by yuxh on 2014/12/7.
 */
var client = require('../databases');

function Post(username,post,time){
    this.user = username;
    this.post = post;
    if(time){
        this,time = time;
    }else{
        this,time = new Date();
    }
};
module.exports = Post;
var tableName = "post";
mysql = client.getDbCon();

Post.prototype.save = function save(callback){
    var post = {
        user: this.user,
        post: this.post,
        time: this.time
    };
    var sql ="insert into post (user,post,time) values(?,?,?)";
    mysql.query(sql,[post.user,post.post,post.time],function(err,fields){
        if (err) {
            throw err;
        } else {
            //返回用户id
            return callback(err, fields);
        };
    });
};

Post.get =  function  get(username, callback) {

    // 读取 users 集合
    var sql = "select c.id,c.name,c.password from post c where 1+1";
    console.log(sql);
    if(username){
        sql += " and c.user = '" + username + "'";
    }
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            callback(err,results,fields);
        }
    })

};