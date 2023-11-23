/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("projects", table => {
    table.increments("id").primary();
    table.string("project_name").notNullable();
    table.string("repo_link").notNullable();
    table.string("description").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("projects");
};
