module.exports = {
  dialect: 'sqlite',
  host: 'localhost',
  // username: 'postgres',
  // password: 'aaa123456@',
  storage: 'db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
