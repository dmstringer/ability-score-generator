const createCharacterTableQuery = `
    create table character (
	    id serial primary key,
	    charname text unique,
	    ctime timestamptz,
	    mtime timestamptz default current_timestamp
    );`

const dropCharacterTableQuery = `drop table character;`


exports.up = function(knex) {
    return knex.raw(createCharacterTableQuery)
};

exports.down = function(knex) {
    return knex.raw(dropCharacterTableQuery)
};
