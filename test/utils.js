const mongoose = require('mongoose');

module.exports = {
    /** Connect to DB */
    connect: () => {
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    },
    /** Disconnect from DB */
    disconnect: async (done) => {
        mongoose.disconnect(done);
    }
}