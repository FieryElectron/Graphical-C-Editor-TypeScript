
class M_Object {
    UniqueId: number

    constructor() {
        this.assignUniqueId();
    }

    assignUniqueId() {
        let UnixTS: number = Date.now();
        let PerformTS: number = performance.now();

        PerformTS = PerformTS - Math.floor(PerformTS);
        PerformTS *= 1000;
        PerformTS = Math.floor(PerformTS);

        UnixTS = UnixTS * 1000 + PerformTS
        this.UniqueId = UnixTS;
    }
}