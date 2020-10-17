require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  // host: '192.168.99.100',
  // // host: 'localhost',
  // username: 'postgres',
  // password: '301159',
  // database: 'methodusco',
  // database: 'methodusldm',
  host: process.env.BD_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
