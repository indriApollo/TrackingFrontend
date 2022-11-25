export class Device {
    id;
    name;
    status;
    info;

    constructor(id, name, status, info) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.info = info;
    }
}

export class DeviceInfo {
    voltage;
    datetime;
    speed;

    constructor(voltage, datetime, speed) {
        this.voltage = voltage;
        this.datetime = datetime;
        this.speed = speed;
    }
}

export const MovementStatus = {
    'OFFLINE': 0,
    'DRIVING': 1,
    'STOPPED': 2
};
