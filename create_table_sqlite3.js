const { options } = require("./options/sqliteDB.js")
const knex = require("knex")(options)

knex.schema.createTable("chats",(table) => {
    table.increments("id"),
    table.string("usuario"),
    table.string("mensaje"),
    table.string("date")
})
    .then(() => console.log("table created"))
    .catch((err) => { console.log(err.message) })
    .finally(() => knex.destroy())
