squareNum = document.getElementById("square-number");
squareRange = document.getElementById("square-range");
distanceNum = document.getElementById("distance-number");
distanceRange = document.getElementById("distance-range");
totalCost = document.getElementById("cost");

squareNumPipe = document.getElementById("square-number-pipe");
squareRangePipe = document.getElementById("square-range-pipe");
distanceNumPipe = document.getElementById("distance-number-pipe");
distanceRangePipe = document.getElementById("distance-range-pipe");
totalCostPipe = document.getElementById("cost-pipe");
scrollContainer = document.querySelector('.service__container')
scrollContainerpipe = document.querySelector('.service__container-pipe')
scrollContainer2 = document.querySelector('.services__slider-name')
scrollContainer2pipe = document.querySelector('.services__slider-name-pipe')
scrollContainer3 = document.querySelector('.slider')
let floorNum = 1;
radios = document.querySelectorAll('.floors__radio-real').forEach(radio => {
    radio.addEventListener('change', () => { floorNum = radio.value; calculate(); });
});
let floorNumpipe = 1;
radios = document.querySelectorAll('.floors__radio-real-pipe').forEach(radio => {
    radio.addEventListener('change', () => { floorNumpipe = radio.value; calculate(); });
});



squareNum.style.width = squareNum.value.length + "ch"
squareNumPipe.style.width = squareNumPipe.value.length + "ch"
distanceNum.style.width = distanceNumPipe.value.length + "ch"
distanceNumPipe.style.width = distanceNumPipe.value.length + "ch"
calculate()

squareRange.addEventListener('input', function () {
    squareNum.value = squareRange.value
    squareNum.style.width = squareNum.value.length + "ch";
    cost.style.width = cost.value.length + "ch";
    calculate();
})
distanceRange.addEventListener('input', function () {
    distanceNum.value = distanceRange.value * 10
    distanceNum.style.width = distanceNum.value.length + "ch";
    calculate();
})
squareRangePipe.addEventListener('input', function () {
    squareNumPipe.value = squareRangePipe.value
    squareNumPipe.style.width = squareNumPipe.value.length + "ch";
    calculate();
})
distanceRangePipe.addEventListener('input', function () {
    distanceNumPipe.value = distanceRangePipe.value * 10
    distanceNumPipe.style.width = distanceNumPipe.value.length + "ch";
    calculate();
})
function calculate() {

    totalCost.value = (squareNum.value * 7000 + distanceNum.value * 500) * floorNum;
    totalCost.style.width = cost.value.length + "ch";
    totalCostPipe.value = (squareNumPipe.value * 7000 + distanceNumPipe.value * 500) * floorNumpipe;
    totalCostPipe.style.width = totalCostPipe.value.length + "ch";
}
scrollContainer2.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer2.scrollLeft += evt.deltaY
    scrollContainer2.style.scrollBehavior = "auto"
})
scrollContainer2pipe.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer2pipe.scrollLeft += evt.deltaY
    scrollContainer2pipe.style.scrollBehavior = "auto"
})
scrollContainer3.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer3.scrollLeft += evt.deltaY
    scrollContainer3.style.scrollBehavior = "auto"
})

const interval = setInterval(function() {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft+=1737
    scrollContainerpipe.style.scrollBehavior = "smooth"
    scrollContainerpipe.scrollLeft+=1720
    scrollContainer3.style.scrollBehavior = "smooth"
    scrollContainer3.scrollLeft+=600
  }, 10000);