import { createConnection } from 'typeorm';

createConnection()
  .then(conn => {
    console.log('Database connection established', conn.driver.database);
  })
  .catch(err => {
    console.log('Error establishing database connection', err);
  });
