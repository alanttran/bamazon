var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    console.log("\n");
    initialize();
});

function initialize() {
    console.log("\nHere are all our products today!\n");
    connection.query(
        "SELECT * FROM products",
        function(error, res) {
            if (error) throw error;
            //console.log(res);
            res.forEach(function(element, index, array) {
                console.log(element.item_id + ". " + element.product_name + " - " 
                	+ element.department_name + " - Price: $" + element.price + "\n");
            })
            console.log("---------------------------------------");

            inquirer
                .prompt([{
                        name: "id",
                        type: "input",
                        message: "What item id would you like to buy?"
                    },
                    {
                        name: "quantity",
                        type: "input",
                        message: "How many units?"
                    }
                ])
                .then(function(answer) {
                    connection.query(
                        "SELECT * FROM products WHERE item_id=?", [answer.id],
                        function(error, res) {
                            if (error) throw error;

                            var stockQuantity = res[0].stock_quantity;
                            var userUnitRequest = parseInt(answer.quantity);
                            var price = res[0].price;
                            var newQuantity = stockQuantity - userUnitRequest;
                            if (stockQuantity >= userUnitRequest) {
                                updateQuantity(answer.id, newQuantity,userUnitRequest, price);
                            }
                            else{
                            	console.log("Insufficient quantity");
                            	initialize();
                            }
                        }
                    )
                });
        }
    )
}

function updateQuantity(id, quantity, units, price) {
    connection.query(
        "UPDATE products SET stock_quantity=? WHERE item_id=?", [quantity, id],
        function(error, res) {
            if (error) throw error;
            var total = units * price;
            console.log("Successfully bought for $" + total);
            initialize();
        }
    )
    
}