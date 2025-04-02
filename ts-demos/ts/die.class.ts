export class Die {
    value!: number;

    constructor() {
        // this.value = 0;
    }

    roll(): void {
        this.value = Math.floor(Math.random() * 6) + 1;
    }

}