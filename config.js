var config = {
	database: {
			// host:          'localhost',          // database host
			host:     'database-03.cnyk4ek4wokb.us-west-1.rds.amazonaws.com',               // database host
			user:     'SQladmin',                   // your database username
			password: 'AstR8i76TY<8',                       // your database password
			port:     3306,                         // default MySQL port
			db:       'node_countries' // your database name
	},
	server: {
			host:'127.0.0.1', // the host for the server
			port: '3000' // the port for the server
	}
}

module.exports = config
