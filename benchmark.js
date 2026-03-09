const { performance } = require('perf_hooks');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="cards"></div><script src="https://code.jquery.com/jquery-2.1.0.min.js"></script></body></html>`, { runScripts: "dangerously", resources: "usable" });

dom.window.onload = () => {
    const $ = dom.window.$;

    // Create 144 cards and shadows
    for (let i = 0; i < 144; i++) {
        $("#cards").append('<div class="card"></div><div class="shadow"></div>');
    }

    // Benchmark 1: Unoptimized
    let unoptimizedTime = 0;
    const ITERATIONS = 10000;

    for (let i = 0; i < ITERATIONS; i++) {
        // Select 2 random cards to remove
        $(".card").removeClass("card-removed");
        $(".card").eq(0).addClass("card-removed");
        $(".card").eq(1).addClass("card-removed");

        const start = performance.now();

        $(".card-removed").each(function () {
            let index = $(".card").index($(this));
            $(".shadow").eq(index).css({"visibility": "hidden"});
        });

        const end = performance.now();
        unoptimizedTime += (end - start);
    }

    // Benchmark 2: Optimized
    let optimizedTime = 0;

    for (let i = 0; i < ITERATIONS; i++) {
        $(".card").removeClass("card-removed");
        $(".card").eq(0).addClass("card-removed");
        $(".card").eq(1).addClass("card-removed");

        const start = performance.now();

        const $cards = $(".card");
        const $shadows = $(".shadow");
        $(".card-removed").each(function () {
            let index = $cards.index($(this));
            $shadows.eq(index).css({"visibility": "hidden"});
        });

        const end = performance.now();
        optimizedTime += (end - start);
    }

    console.log(`Unoptimized: ${unoptimizedTime.toFixed(2)} ms`);
    console.log(`Optimized: ${optimizedTime.toFixed(2)} ms`);
    console.log(`Improvement: ${((unoptimizedTime - optimizedTime) / unoptimizedTime * 100).toFixed(2)}%`);
};
