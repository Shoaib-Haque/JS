/* 
Jim's Burgers has a line of hungry customers. Orders vary in the time it takes to prepare them. Determine the order the customers receive their orders. Start by numbering each of the customers from 1 to n, front of the line to the back. You will then be given an order number and a preparation time for each customer.

The time of delivery is calculated as the sum of the order number and the preparation time. If two orders are delivered at the same time, assume they are delivered in ascending customer number order.

For example, there are n=5 customers in line. They each receive an order number order[i] and a preparation time prep[i]:

Customer	1	2	3	4	5
Order #		8	5	6	2	4
Prep time	3	6	2	3	3
Calculate:
Serve time	11	11	8	5	7
We see that the orders are delivered to customers in the following order:

Order by:
Serve time	5	7	8	11	11
Customer	4	5	3	1	2
*/


function jimOrders(orders) {
    for(let i=0; i<orders.length; i++) {
        orders[i][2] = orders[i][0] + orders[i][1];
        orders[i][3] = i+1;
    }
    orders.sort((a, b) => a[2]-b[2]);
    console.log(orders.map((sub) => sub[3]).join(" "));
}

jimOrders([[8, 3], [5, 6], [6, 2], [2, 3], [4, 3]]);
jimOrders([[1, 3], [2, 3], [3, 3]]);
jimOrders([[8, 1], [4, 2], [5, 6], [3, 1], [4, 3]]);