import { Order } from "./interface.js"

export class OrderManager{

    private _orders: Order[] = [];
    
    public get orders(): Order[] {
        return this._orders;
    }
    public set orders(value: Order[]) {
        this._orders = value;
    }

    addOrder(order: Order): void{
        this.orders.push(order);
    }
       
    findOrderById(id: number): Order | undefined {
        return this.orders.find(order => order.id === id);
    }

    listOrdersByStatus(status: 'en attente' | 'expédiée' | 'livrée'): Order[] {
        return this.orders.filter(order => order.status === status);
    }




}