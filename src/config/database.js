// require('dotenv/config')

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  // host: '192.168.99.100',
  username: 'postgres',
  password: '301159',
  // password: 'docker',
  database: 'methodusco',
  // host: process.env.BD_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
