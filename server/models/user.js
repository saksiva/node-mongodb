const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };

// const newUser = new User({
//   email: " stat@nte.com "
// });
//
// newUser.save().then(
//   doc => {
//     console.log("Saved user", doc);
//   },
//   e => {
//     console.log("Unable to save user");
//   }
// );
