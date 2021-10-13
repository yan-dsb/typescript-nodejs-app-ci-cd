import { createConnection } from 'typeorm';

createConnection()
  .then(conn => {
    console.log('Database driver', conn.driver);
  })
  .catch(err => {
    console.log('Database connection established', err);
  });
