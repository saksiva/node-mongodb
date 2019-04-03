const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // db.collection("Todos")
    //   // .find({ completed: false })
    //   .find({
    //     _id: new ObjectID("5ca3918d9f92da4e5231755b")
    //   })
    //
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    // db.collection("Todos")
    //   // .find({ completed: false })
    //   .find({})
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );
    db.collection("Users")
      .find({
        name: "ak"
      })

      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );
    // db.close();
  }
);
