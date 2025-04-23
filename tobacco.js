elements.tobacco = {
    color: ["#6b4f32", "#705438", "#7a5e42", "#84684c", "#8f7355"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 250,
    stateHigh: ["ash", "smoke", "smoke", "smoke"], // Эти элементы уже есть в Sandboxels
    burn: 40,
    burnTime: 150,
    burnInto: ["ash", "smoke", "smoke", "smoke"],
    state: "solid",
    density: 300,
};

// Добавим в список powders (чтобы отображалось по фильтру)
if (!eLists.POWDERS) eLists.POWDERS = [];
eLists.POWDERS.push("tobacco");

// Проверим загрузку мода
runAfterLoad(function() {
    console.log("Мод 'tobacco.js' загружен!");
});
