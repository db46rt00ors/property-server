var express = require("express");
var formidable = require("formidable");
var app = express();
app.get('/oneStep', function(req,res){
  res.json({a: 1, b: 2});
})
app.get("/users/info", function (req, res) {
  var result = {};
  result = {
    name: "admin",
    avatar: "/avatar2.jpg",
    role: {
      permissions: [
        {
          permissionId: "901",
          permissionName: "个人办公",
        },
        {
          permissionId: "221",
          permissionName: "楼盘管理",
        },
        {
          permissionId: "223",
          permissionName: "业主信息",
        },
        { 
          permissionId: "226",
          permissionName: "费项设置",
        },{ 
          permissionId: "228",
          permissionName: "收费管理",
        },
        { 
          permissionId: "233",
          permissionName: "车位管理",
        },
        { 
          permissionId: "224",
          permissionName: "安保管理",
        },
        { 
          permissionId: "225",
          permissionName: "社区消防",
        },
      ],
    },
  };
  res.json({
    message: "ok",
    // timestamp: 1586854499869,
    result,
    code: 200
  });
});
app.post("/login", function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    res.json({
      message: "",
      result: {
        password: "1",
        username: "11",
        token: "222",
      },
      code: 200,
    });
  });
});
app.listen(3000, () => {
  console.log(3000);
});
