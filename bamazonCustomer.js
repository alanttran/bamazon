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
    console.log("\n");
    console.log('connected as id ' + connection.threadId);
    console.log("\n");
    initialize();
});

function initialize() {
    console.log("Here are all our products today!");
    connection.query(
        "SELECT * FROM products",
        function(error, res) {
            if (error) throw error;
            //console.log(res);
            res.forEach(function(element, index, array) {
                console.log("id: " + element.item_id);
                console.log("Product: " + element.product_name);
                console.log("Department: " + element.department_name);
                console.log("Price: $" + element.price);
                console.log("\n");
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
                            var newQuantity = stockQuantity - userUnitRequest;
                            if (stockQuantity >= userUnitRequest) {
                                updateQuantity(answer.id, newQuantity);
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

function updateQuantity(id, quantity) {

    console.log("Update quantity " + id + " " + quantity);
    connection.query(
        "UPDATE products SET stock_quantity=? WHERE item_id=?", [quantity, id],
        function(error, res) {
            if (error) throw error;
            console.log("Inventory successfully updated!");
        }
    )
    initialize();
}