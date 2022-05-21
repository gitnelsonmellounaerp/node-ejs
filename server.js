const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//criando as paginas

app.get("/", function(req, res){
    //chmando conteudos de forma dinamica
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações"
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar html"
        },
        {
            title: "F",
            message: "oo"
        }
    ];

    //outro exemplo de forma dinamica
    const subtitle = "EJS é uma liguagem de criação de páginas HTML de forma dinamica."
    res.render("pages/index", {
        quality: items,
        subtitle: subtitle, //olhar na index.ejs
    });
});

app.get("/sobre", function(req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("Servidor funcionando...");