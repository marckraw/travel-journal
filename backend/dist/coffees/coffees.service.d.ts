import { Coffee } from './entities/coffee.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDto: any): any;
    update(id: string, updateCoffeeDto: any): void;
    remove(id: string): void;
}
