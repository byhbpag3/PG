require.config({
    baseUrl: "lib",
    config: {
        mod: {
            size: "1px"
        },
        foo: {
            size: "1px"
        },
        bar: {
            size: "1px"
        }
    },
    packages: ["car"]
});
require(["car"], function(car) {
    console.log(car);
})