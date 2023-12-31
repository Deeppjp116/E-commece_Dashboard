// Sample order data
const { ObjectId } = require('mongoose').Types;
const ProductData = require('../Data/product');

const OrderData = [
  {
    Customer: 'Ishita',
    Order: new ObjectId(),
    AmountTotal: 491.63923058385166,
    Location: 'Chennai',
    OrderStatus: 'Delivered',
    StatusBg: '#ff0000',
    products: [
      ProductData[0].ProductId,
      ProductData[1].ProductId,
      ProductData[2].ProductId,
    ],
  },

  {
    Customer: 'John',
    Order: new ObjectId(),
    AmountTotal: 350.25,
    Location: 'New York',
    OrderStatus: 'In Progress',
    StatusBg: '#00ff00',
    products: [
      ProductData[3].ProductId,
      ProductData[4].ProductId,
      ProductData[5].ProductId,
    ],
  },

  {
    Customer: 'Emily',
    Order: new ObjectId(),
    AmountTotal: 200.5,
    Location: 'Los Angeles',
    OrderStatus: 'Pending',
    StatusBg: '#0000ff',
    products: [
      ProductData[6].ProductId,
      ProductData[7].ProductId,
      ProductData[8].ProductId,
    ],
  },
  {
    Customer: 'Alex',
    Order: new ObjectId(),
    AmountTotal: 275.75,
    Location: 'Chicago',
    OrderStatus: 'Shipped',
    StatusBg: '#ffa500',
    products: [
      ProductData[9].ProductId,
      ProductData[10].ProductId,
      ProductData[11].ProductId,
    ],
  },

  {
    Customer: 'Sophia',
    Order: new ObjectId(),
    AmountTotal: 150.9,
    Location: 'San Francisco',
    OrderStatus: 'Delivered',
    StatusBg: '#008080',
    products: [
      ProductData[12].ProductId,
      ProductData[13].ProductId,
      ProductData[14].ProductId,
    ],
  },

  {
    Customer: 'Ethan',
    Order: new ObjectId(),
    AmountTotal: 430.45,
    Location: 'Miami',
    OrderStatus: 'In Progress',
    StatusBg: '#800080',
    products: [
      ProductData[15].ProductId,
      ProductData[16].ProductId,
      ProductData[17].ProductId,
    ],
  },
  {
    Customer: 'Olivia',
    Order: new ObjectId(),
    AmountTotal: 190.2,
    Location: 'Seattle',
    OrderStatus: 'Pending',
    StatusBg: '#ff00ff',
    products: [
      ProductData[18].ProductId,
      ProductData[19].ProductId,
      ProductData[20].ProductId,
    ],
  },

  {
    Customer: 'Liam',
    Order: new ObjectId(),
    AmountTotal: 310.75,
    Location: 'Denver',
    OrderStatus: 'Shipped',
    StatusBg: '#008000',
    products: [
      ProductData[21].ProductId,
      ProductData[22].ProductId,
      ProductData[23].ProductId,
    ],
  },

  {
    Customer: 'Ava',
    Order: new ObjectId(),
    AmountTotal: 90.5,
    Location: 'Atlanta',
    OrderStatus: 'Delivered',
    StatusBg: '#800000',
    products: [
      ProductData[24].ProductId,
      ProductData[25].ProductId,
      ProductData[26].ProductId,
    ],
  },
  {
    Customer: 'Mia',
    Order: new ObjectId(),
    AmountTotal: 250.9,
    Location: 'Houston',
    OrderStatus: 'Processing',
    StatusBg: '#008080',
    products: [
      ProductData[27].ProductId,
      ProductData[28].ProductId,
      ProductData[29].ProductId,
    ],
  },

  {
    Customer: 'Noah',
    Order: new ObjectId(),
    AmountTotal: 180.25,
    Location: 'Phoenix',
    OrderStatus: 'Delivered',
    StatusBg: '#800080',
    products: [
      ProductData[30].ProductId,
      ProductData[31].ProductId,
      ProductData[32].ProductId,
    ],
  },

  {
    Customer: 'Emma',
    Order: new ObjectId(),
    AmountTotal: 120.5,
    Location: 'Dallas',
    OrderStatus: 'Shipped',
    StatusBg: '#ff8000',
    products: [
      ProductData[33].ProductId,
      ProductData[34].ProductId,
      ProductData[35].ProductId,
    ],
  },
  {
    Customer: 'William',
    Order: new ObjectId(),
    AmountTotal: 300.75,
    Location: 'Miami',
    OrderStatus: 'Delivered',
    StatusBg: '#008000',
    products: [
      ProductData[36].ProductId,
      ProductData[37].ProductId,
      ProductData[38].ProductId,
    ],
  },

  {
    Customer: 'Sophie',
    Order: new ObjectId(),
    AmountTotal: 150.5,
    Location: 'Chicago',
    OrderStatus: 'Processing',
    StatusBg: '#ff00ff',
    products: [
      ProductData[39].ProductId,
      ProductData[40].ProductId,
      ProductData[41].ProductId,
    ],
  },

  {
    Customer: 'James',
    Order: new ObjectId(),
    AmountTotal: 220.9,
    Location: 'Los Angeles',
    OrderStatus: 'Shipped',
    StatusBg: '#800080',
    products: [
      ProductData[42].ProductId,
      ProductData[43].ProductId,
      ProductData[44].ProductId,
    ],
  },
  {
    Customer: 'Elijah',
    Order: new ObjectId(),
    AmountTotal: 180.25,
    Location: 'Seattle',
    OrderStatus: 'Delivered',
    StatusBg: '#008080',
    products: [
      ProductData[45].ProductId,
      ProductData[46].ProductId,
      ProductData[47].ProductId,
    ],
  },

  {
    Customer: 'Aria',
    Order: new ObjectId(),
    AmountTotal: 90.5,
    Location: 'San Francisco',
    OrderStatus: 'Processing',
    StatusBg: '#ff8000',
    products: [
      ProductData[48].ProductId,
      ProductData[49].ProductId,
      ProductData[0].ProductId,
    ],
  },

  {
    Customer: 'Carter',
    Order: new ObjectId(),
    AmountTotal: 120.75,
    Location: 'New York',
    OrderStatus: 'Shipped',
    StatusBg: '#800000',
    products: [
      ProductData[1].ProductId,
      ProductData[2].ProductId,
      ProductData[3].ProductId,
    ],
  },
];

module.exports = OrderData;
