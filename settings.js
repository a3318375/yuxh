/**
 * Created by yuxh on 2014/12/6.
 */
(function() {
    var settings;

    settings = {
        db: {
            host: 'localhost',     //本地数据库
            port: '3306',
            user: 'root',          //数据库用户名
            password: 'root',          //数据库密码
            database: 'microblog'  //数据库名称
        }
    };

    module.exports = settings;

}).call(this);