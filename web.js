const app = require("express")();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(require("express").static(__dirname + '/public'));
app.listen(8001, () => { console.log("listening on 8001") });

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/diff", (req, res) => {
    res.render("diff.ejs");
});
app.get("/lang/js", (req, res) => {
    res.render("lang/js.ejs");
});