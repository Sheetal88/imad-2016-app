var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    articleOne : {
        title: 'Artical One | Sheetal Jagtap',
        heading: 'Artical One',
        date: 'Sept 6',
        content: `
        <p>
            This is paragraph one.This is paragraph one.This is paragraph one.This is paragraph one.
        </p>
        <p>
            This is paragraph two.This is paragraph two.This is paragraph two.This is paragraph two.
        </p>
        <p>
            This is prargraph three.This is prargraph three.This is prargraph three.This is prargraph three.
        </p>`
    },
     articleTwo : {
        title: 'Artical Two | Sheetal Jagtap',
        heading: 'ArticalTwo',
        date: 'Sept 7',
        content: `
        <p>
            This is two.
        </p>
        `
    },
     articleThree : {
        title: 'Artical Three | Sheetal Jagtap',
        heading: 'ArticalThree',
        date: 'Sept 8',
        content: `
        <p>
            This is three.
        </p>
        `
    }
};



function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate =  `
        <html>

        <head>
        <title>
            ${title}
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />

        </head>

        <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>

        <hr/>
        <h3>
            ${heading}
        </h3>

        <div>
            ${date}
        </div>
    
        <div>
            ${content}
        </div>
        </div>
        </body>

        </html>
        `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function(req, res){
   counter =counter + 1;
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function(req, res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
