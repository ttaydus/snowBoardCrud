
exports.up = function(knex) {
    return knex.schema.createTable('snowboardgear', (table) => {
        table.increments('id');
        table.string('itemName');
        table.string('price');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('snowboardgear');
};
