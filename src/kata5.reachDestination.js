const reachDestination = (distance, speed) => {
    hoursToArrival = distance / speed;
    return "I should be there in " + (Math.round(hoursToArrival * 2) / 2) + " hours."
};
module.exports = reachDestination;

//Note to self - this was pretty easy. The extra is what rounds it to nearest .5 rather than nearest whole number.