

export const randomColorGenerator = () => {
    const colorsArray = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C", "#1ABC9C", "#34495E", "#2ECC71", "#E67E22"];

    const randomNumber = Math.floor(Math.random() * colorsArray.length);

    // console.log(randomNumber);
    // console.log(colorsArray[randomNumber]);

    return colorsArray[randomNumber];

};