const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteMany
    // db.collection("Users")
    //   .deleteMany({ name: "ak" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Users")
    //   .findOneAndDelete({ _id: new ObjectID("5ca396c0a304645f295b79aa") })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.close();
  }
);
