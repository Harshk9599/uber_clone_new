// const mongoose = require('mongoose');

// const blacklistTokenSchema = new mongoose.Schema({
//   token: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     expires: 86400 // 24 hours in seconds - TTL index
//   }
// });

// // Create TTL index to automatically delete documents after 24 hours
// blacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

// module.exports =  mongoose.model('BlacklistToken', blacklistTokenSchema);



const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds - TTL index
  }
});

// Create TTL index to automatically delete documents after 24 hours
// blacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

module.exports =  mongoose.model('BlacklistToken', blacklistTokenSchema);
