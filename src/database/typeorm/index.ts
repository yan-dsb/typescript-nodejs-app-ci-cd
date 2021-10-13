import { createConnection } from 'typeorm';

createConnection()
  .then(conn => {
    console.log(conn.driver);
  })
  .catch(err => {
    console.log(err);
  });
