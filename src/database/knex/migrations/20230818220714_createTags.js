const { default: knex } = require("knex");

exports.up = knex => knex.schema.createTable("tags", table =>{
    table.increments("id");
    table.text("name").notNullable();
    
    table.text("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.text("user_id").references("id").inTable("users");

});

exports.down = knex => knex.schema.dropTable("tags");
