const mysql = require('mysql');
const chai = require('chai');
const { expect } = chai;
const dbConfig = {
    host: 'database-03.cnyk4ek4wokb.us-west-1.rds.amazonaws.com',
    user: 'SQladmin',
    password: 'AstR8i76TY<8',
    database: 'node_countries',
    port: 3306,
};


describe('Database Operations', () => {
    let connection;

    beforeEach((done) => {
        connection = mysql.createConnection(dbConfig);
        connection.connect((err) => {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    afterEach((done) => {
        connection.query('DELETE FROM node_countries WHERE name = "Test country"', (err) => {
            if (err) {
                return done(err);
            }
            connection.end(done);
        });
    });

    it('should add an item to the database', (done) => {
        const item = { name: 'Test Item2', callingCode: 234 };
        const sql = 'INSERT INTO node_countries SET ?';

        connection.query(sql, item, (err, result) => {
            if (err) {
                return done(err);
            }
            expect(result.affectedRows).to.equal(1);

            connection.query('SELECT * FROM node_countries WHERE name = ?', item.name, (err, results) => {
                if (err) {
                    return done(err);
                }
                expect(results).to.be.an('array').that.deep.includes(item);
                done();
            });
        });
    });
});