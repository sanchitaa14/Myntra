// src/database.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dresses.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS dresses (id INTEGER PRIMARY KEY NOT NULL, name TEXT, image TEXT, items TEXT);'
    );
  });
};

export const insertDress = (name, image, items) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO dresses (name, image, items) values (?, ?, ?)', [name, image, items]);
  });
};

export const getDresses = (setDresses) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM dresses',
      [],
      (_, { rows: { _array } }) => {
        setDresses(_array);
      }
    );
  });
};

export default db;
