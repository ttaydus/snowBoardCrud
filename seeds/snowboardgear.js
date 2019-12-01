
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('snowboardgear').del()
    .then(function () {
      // Inserts seed entries
      return knex('snowboardgear').insert([
        {id: 1, itemName:'Boots', price:'120'},
        {id: 2, itemName:'Socks', price:'15'},
        {id: 3, itemName:'Pants', price:'100'},
        {id: 4, itemName:'Belt', price:'20'},
        {id: 5, itemName:'longUnderWear', price:'40'},
        {id: 6, itemName:'Jacket', price:'140'},
        {id: 7, itemName:'Goggles', price:'120'},
        {id: 8, itemName:'Helmet', price:'100'},
        {id: 9, itemName:'Hat', price:'30'}
      ]);
    });
};
