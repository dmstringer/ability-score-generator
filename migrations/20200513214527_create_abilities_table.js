
const createAbilitiesTableQuery = `
create table abilities (
    id serial primary key,
    strength int,
    dexterity int,
    constitution int,
    intelligence int,
    wisdom int,
    charisma int,
    character_id int references character(id),
    ctime timestamptz,
    mtime timestamptz default current_timestamp
);`

const dropAbilitiesTableQuery = `drop table abilities;`


exports.up = function(knex) {
return knex.raw(createAbilitiesTableQuery)
};

exports.down = function(knex) {
return knex.raw(dropAbilitiesTableQuery)
};
