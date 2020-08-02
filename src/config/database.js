module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'bruno',
    password: 'postgres',
    database: 'ars',
    define : {
        timestamps: true, //createdAt, updatedAt
        underscored: true, //snake_case
    },
};