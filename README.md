# bamazon
 Amazon-like storefront with mySQL.User will be shown the existing products and can buy items.

# Node

*  mysql
*  inquirer

First install or update your local project's **npm** tools:

```bash
# First install all the NPM tools:
npm install
```
# Start the app

```bash
node bamazonCustomer.js
```

If database connection is successful, you should see
```bash
connected as id [number]
```

And then the inventory list

![bamazon app list](http://imgur.com/EHDkDKp.png)

# Using the app

Type in the id of the item you want to buy. In the above example that would be 1-11

![bamazon item buy](http://imgur.com/ypJmxLn.png)

Once you have chosen an item, type the number of units you would like

![bamazon units](http://imgur.com/isuw8rC.png)

If there is enough inventory you should be prompted with 
```node
Successfully bought for $[total]
```
otherwise you will get
```node
Insufficient quantity
```

In both cases, the app restart and prompt you for what you would like to buy again.
 

