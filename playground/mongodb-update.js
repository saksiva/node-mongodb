const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5ca391b5a498884ed59a0dd9") },
    //     {
    //       $set: { completed: true }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5ca393f9192f6e560c16583b") },
        {
          $set: { name: "Dave" },
          $inc: { age: 1 }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });

    // db.close();
  }
);
