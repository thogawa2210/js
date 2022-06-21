class Battery {
    constructor(energy) {
        this.battery = energy;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy -= 1;
        }
    }
}