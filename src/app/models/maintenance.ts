export interface Maintenance {
    id: number;
    vehicleId: number;
    typeMaintenance: string;
    note: string;
    cost: number;
    maintenanceDate: Date;
}
