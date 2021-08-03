var M_Object = /** @class */ (function () {
    function M_Object() {
        this.assignUniqueId();
    }
    M_Object.prototype.assignUniqueId = function () {
        var UnixTS = Date.now();
        var PerformTS = performance.now();
        PerformTS = PerformTS - Math.floor(PerformTS);
        PerformTS *= 1000;
        PerformTS = Math.floor(PerformTS);
        UnixTS = UnixTS * 1000 + PerformTS;
        this.UniqueId = UnixTS;
    };
    return M_Object;
}());
