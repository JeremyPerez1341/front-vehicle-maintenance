export interface Vehicle {
    id: number;
    vehicleMaintenances: Array<any>;
    maintenances: Array<any>;
    brand: string;
    model: string;
    plate: string;
    year: number;
    registeredAt: Date;
}
