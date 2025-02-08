elements.tobacco = {
    color: ["#6b4f32", "#705438", "#7a5e42", "#84684c", "#8f7355"],
    behavior: behaviors.POWDER, // Используем готовое поведение порошков
    category: "powders",
    tempHigh: 250,
    stateHigh: ["ash", "smoke", "smoke", "smoke"],
    burn: 40,
    burnTime: 150,
    burnInto: ["ash", "smoke", "smoke", "smoke"],
    state: "solid",
    density: 300,
};

// Добавляем табак в список органики (по желанию)
if (!eLists.ORGANIC) eLists.ORGANIC = [];
eLists.ORGANIC.push("tobacco");
