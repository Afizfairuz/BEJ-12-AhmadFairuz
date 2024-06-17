const orders = [
    {
        id: 1, 
        user_email: "ahmad@2gmail.com",
        products: [
            { name: "sepatu mizuno", price: 3000, category_code: "mzn"},
        ],
        total: 3000,
        status: "completed",
    },
    {
        id: 2, 
        user_email: "fairuz@gmail.com",
        products: [
            { name: "hp iphone 20", price: 2000, category_code: "ip20"},
        ],
        total: 2000,
        status: "pending"
    },
];

class OrderRepository {
    constructor() {
        this.orders = orders;
    }

    getAll() {
        return this.orders;
    }

    getById(id) {
        return this.orders.find(order => order.id === id);
    }

    addOrder(order) {
        this.orders.push(order);
        return order;
    }

    deleteById(id) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index !== 1) {
            this.orders.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = OrderRepository;