function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o;
}
export const AllowedCarParameters  = createEnum({
    Chapter: "Chapter",
    EquipmentType: "EquipmentType",
    Brand: "Brand",
    Model: "Model",
    WheelType: "WheelType",
    Year: "Year",
    Gear: "Gear",
    FuelType: "FuelType",
    Transmission: "Transmission",
    EngineCapacity: "EngineCapacity",
    Power: "Power"
})


