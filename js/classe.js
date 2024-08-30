export class OrderManager {
    constructor() {
        this._orders = [];
    }
    get orders() {
        return this._orders;
    }
    set orders(value) {
        this._orders = value;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    findOrderById(id) {
        return this.orders.find(order => order.id === id);
    }
    listOrdersByStatus(status) {
        return this.orders.filter(order => order.status);
    }
}
