const express = require("express"); //express = framework to run node more easily
const app = express(); //app is better way to call the express class
const port = 3000; //port placed here for convenience and naming it ahead of time
const MongoClient = require("mongodb").MongoClient; //setting up mongodb

const connectionString =
  "mongodb+srv://angymacodes_db_user:ONccOtJBvl6GbKFP@cluster0.5wlv0gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public")); //connects express to main.js
app.use(express.json()); //tells express to accept all json files


//connecting server to mongoDb database
MongoClient.connect(connectionString)
  .then((client) => {
    const db = client.db("newRoom"); //create a room/aka database for your collections
    const quotesCollection = db.collection("quotes"); //create a collection

    // establish route for getting index.html
    app.get("/", (req, res) => {
      db.collection("quotes");
      const cursor = db
        .collection("quotes") //contains all quotes from db
        .find()
        .toArray() //convert the cursor data to an array
        .then((results) => {
          console.log(results); //console log the array
          res.render("index.ejs", { quotes: results });
        })
        .catch((error) => console.log(error));

      // establish route for posting a quote
      app.post("/quotes", (req, res) => {
        console.log(req.body); //these are the post method values
        console.log("hello from post");
        quotesCollection //variables inside of the db
          .findOneAndUpdate(req.body) //this .findOneAndUpdate is a method that inserts the new post (req.body) into the collection
          .then((results) => {
            console.log(results);
            res.redirect("/"); // when you do a post method, it waits for a response. a good way to get past that is with res.redirect('/') back to your homepage
          });
      });
    });

    //establish route for put handler, send using '/quotes'
    app.put("/quotes", (req, res) => {
      console.log(req.body);
      quotesCollection
        .findOneAndUpdate(
          { name: "Yoda" }, //filter options, what it needs to find
          {
            $set: {
              name: req.body.name, //what are you changing?
              quote: req.body.quote, 
            }, 
          }, 
          {
            upsert: true, //options like upsert
          }
        ) //end of findOneAndUpdate handler
        .then((result) => {
          res.json("Success"); //respond with a success message
        })
        .catch((error) => console.error(error));
    });
    app.delete("/quotes", (req, res) => {
      // Handle delete event here
      quotesCollection
        .deleteOne({ name: req.body.name }) //here we are deleting the desired value based off of the request
        .then((result) => {
          if (result.deletedCount === 0){
            return res.json ("No quotes to delete")
          }
          res.json("Deleted Vader");
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

//this is the main listener for the server
app.listen(port, () => {
  console.log("It has begun!");
});

