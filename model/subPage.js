const { inputBoxColor, textColor, pointColor } = require("./signUpAsset");

const subPage = (id)=>{
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/substyle.css">
  <style>
    *{
      color : ${textColor};
    }
    h1>span {
      background-color: ${pointColor};
      border-radius : 10px;
    }
    input {
      background-color : ${inputBoxColor};
    }
    #textsend {
      padding : 2px 10px;
      background-color: ${pointColor};
    }
  </style>
  <title>sub page</title>
</head>
<body>
  <div id="root">
  <h1><span>${id}</span> 님 반갑습니다.<br>저에게 편지를 보내주세요!</h1>
    <label for="id" id="helloDiv"></label>
    <form action="/" method="post">
      <label for="title">
        title
        <input type="text">
      </label>
      <label for="textPart" >
        Text
        <input type="text" id="textPart">
      </label>
      <input type="submit" value="완료" id="textsend">
    </form>"
  </div>
</body>
</html>
`
}
module.exports = subPage;