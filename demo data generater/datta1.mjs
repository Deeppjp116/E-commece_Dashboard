import mongoose from 'mongoose';

// Assuming you have productData defined
const productData = [
  // ... Your product data here
];

// Generate 50 orders with random products
const bulkOrderData = Array.from({ length: 50 }).map((_, index) => {
  const orderProducts = Array.from({
    length: Math.floor(Math.random() * 5) + 1,
  }).map(() => {
    const randomProductIndex = Math.floor(Math.random() * productData.length);
    return productData[randomProductIndex].productId;
  });

  return {
    OrderID: new mongoose.Types.ObjectId(),
    TotalAmount: Math.random() * 100, // Adjust as needed
    Location: `City ${index + 1}`,
    Status: index % 2 === 0 ? 'Shipped' : 'Pending',
    StatusBg: index % 2 === 0 ? '#5BC0EB' : '#FB9678',
    Product: orderProducts,
  };
});

console.log(JSON.stringify(bulkOrderData, null, 2));
