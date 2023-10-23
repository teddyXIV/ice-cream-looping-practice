window.addEventListener("load", function () {
    iceCreamFlavors = ["Chocolate", "Vanilla", "Strawberry", "Pistachio", "Rocky Road"];

    const ul = document.createElement("ul")
    const h1Element = document.querySelector("h1");

    h1Element.after(ul);

    iceCreamFlavors.forEach(function (flavor) {
        const li = document.createElement("li");
        li.append(flavor);
        ul.append(li);
    });
});