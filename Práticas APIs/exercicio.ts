export class Car{
    id: number;
    brand: Brand;
    model: Model;
    year: number;
    category: Category;

    constructor(id: number, brand: Brand, model: Model, year: number, category: Category){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.category = category
    }
}

export class Brand{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
}

export class Category{
    id: number;
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
}

export class Model {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

export class clientApi{
    clientUrl: string;

    constructor(clientUrl: string){
        this.clientUrl = clientUrl
    }

    async getCars(): Promise<Car[]> {
        const result = await fetch(`${this.clientUrl}/cars`);
        const geTdata = await result.json();
        return geTdata
    }

    async getCarById(id: number): Promise<Car>{
        const result = await fetch(`${this.clientUrl}/cars/${id}`);
        const iDdata = await result.json();
        return iDdata
    }

    async CreatCar(id: number, car: Car): Promise<Car> {
        const result = await fetch(`${this.clientUrl}/cars/${id}`, {
            method: 'POSNT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        });
        const creatData = await result.json();
        return creatData
    }

    async upgradeCar(id: number, car: Car): Promise<Car> {
        const result = await fetch(`${this.clientUrl}/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        });
        const dataUpgrade = await result.json();
        return dataUpgrade;
    }

    async deleteCar(id: number): Promise<void> {
        await fetch(`${this.clientUrl}/cars/${id}`, {
            method: 'DELETE',
        });
    }
}

const api = new clientApi('https://apigenerator.dronahq.com/api/ycqPAlqB/carro')

api.getCars().then((cars) => console.log('Cars', cars))
api.getCarById(1).then((car) => console.log(`Car by ID`, car));

const newCar = new Car(0, new Brand(1, 'Volkswagen'), new Model(1, 'Nivus'), 2022, new Category(2, 'Sedan'));

const updateCar = new Car(1, new Brand(2, 'Fiat'), new Model(2, 'Punto'), 2014, new Category(2, 'Retchback'));
api.upgradeCar(1, updateCar).then((car) => console.log('Upgrade Car:', car));

api.deleteCar(1).then(() => console.log('Car deleted successfully'))