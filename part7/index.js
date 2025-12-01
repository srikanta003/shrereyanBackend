const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { files: files }); //sending files to frontend
  });
});
app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, data) => {
    if (err) console.log(err);
    else {
      res.render("show", { filename: req.params.filename, filedata: data });
    }
  });
});

app.get('/edit/:filename',(req,res ) => {
  res.render('edit',{filename:req.params.filename});
}
)

app.post("/create", (req, res) => {
  // console.log(req.body)
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      if (err) console.log(err);
      res.redirect("/");
    }
  );
});
app.post("/edit", (req, res) => {
  console.log(req.body)
  fs.rename(`./files/${req.body.prevTitle}`,`./files/${req.body.newTitle}`,(err ) => {
    if (err) console.log(err)
    res.redirect('/')
  
  }
  )
});

app.listen(3000);
