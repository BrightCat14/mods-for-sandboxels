elements.tobacco = {
    color: ["#6b4f32", "#705438", "#7a5e42", "#84684c", "#8f7355"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 250,
    stateHigh: ["ash", "smoke", "smoke", "smoke"],
    burn: 40,
    burnTime: 150,
    burnInto: ["ash", "smoke", "smoke", "smoke"],
    state: "solid",
    density: 300,
};

// Проверяем, существует ли eLists.ORGANIC и добавляем туда табак
if (!eLists.ORGANIC) eLists.ORGANIC = [];
eLists.ORGANIC.push("tobacco");

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Выводим сообщение в консоль, чтобы проверить, загрузился ли мод
    console.log("Мод 'tobacco.js' загружен!");
});
