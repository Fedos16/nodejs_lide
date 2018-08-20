const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    login: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    typeUser: {
      type: String
    },
    email: {
      type: String
    },
    status: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('User', schema);