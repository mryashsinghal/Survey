const mongoose = require('mongoose');

const scheme = mongoose.Schema();

let Answer = new scheme({
    ans: {
        type:Object,
        require:true
    }
})

module.exports = mongoose.model('ans',Answer);