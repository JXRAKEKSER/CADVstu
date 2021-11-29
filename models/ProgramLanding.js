const mongoose = require('mongoose');
const INT32 = require('mongoose-int32').loadType(mongoose)

const schema = new mongoose.Schema({
    name:{type: String, required:true, unique:true},
    ru:{
        description:{
            intro:{type: String},
            quote:{
                quoteText:{type: String},
                quoteAutor:{type: String}
            },
            pitchTitle: {type: String},
            pitchText: {type: String}
        },
        programParams: {
            programDuration: {type: INT32},
            competition: {
                BudgetFunded: {type: INT32},
                paid: {type: INT32},
                benefit: {type: INT32}
            },
            accreditation: {type: Boolean}
        },
        programDetails: [{
            question: {type: String, required:true},
            answer: {type: String, required: true},
            linkPointer: {
                word: {type: String},
                linl: {type: String}
            }
        }],
        faq: [{
            question: {type: String},
            answer: {type: String}
        }]
    },
    eng:{
        description:{
            intro:{type: String},
            quote:{
                quoteText:{type: String},
                quoteAutor:{type: String}
            },
            pitchTitle: {type: String},
            pitchText: {type: String}
        },
        programParams: {
            programDuration: {type: INT32},
            competition: {
                BudgetFunded: {type: INT32},
                paid: {type: INT32},
                benefit: {type: INT32}
            },
            accreditation: {type: Boolean}
        },
        programDetails: [{
            question: {type: String, required:true},
            answer: {type: String, required: true},
            linkPointer: {
                word: {type: String},
                linl: {type: String}
            }
        }],
        faq: [{
            question: {type: String},
            answer: {type: String}
        }]
    }
});

module.exports = mongoose.model('landingData', schema)