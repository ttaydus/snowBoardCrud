
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('snowboardgear').del()
    .then(function () {
      // Inserts seed entries
      return knex('snowboardgear').insert([
        {itemName:'Boots', price:'120'},
        {itemName:'Socks', price:'15'},
        {itemName:'Pants', price:'100'},
        {itemName:'Belt', price:'20'},
        {itemName:'longUnderWear', price:'40'},
        {itemName:'Jacket', price:'140'},
        {itemName:'Goggles', price:'120'},
        {itemName:'Helmet', price:'100'},
        {itemName:'Hat', price:'30'}
      ]);
    });
};
