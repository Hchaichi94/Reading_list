const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ac7gz.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('yesssssssss')
        app.listen(4000)
    })
    .catch(err => {
        console.log(err)
    })