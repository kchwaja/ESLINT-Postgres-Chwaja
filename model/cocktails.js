const db = require('../db');

async function getCocktails() {
  const { rows } = await db.query('SELECT cname,preis FROM cocktail');
  console.log(rows);
  return {
    code: 200,
    data: rows,
  };
}

module.exports = {
    getCocktails,
  };