const heading = React.createElement("h1",{id: "heading"},"Namaste React by Vartika Agarwal");
const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello Aeiou"),React.createElement("h3",{},"Hello Everyone")]),
        React.createElement("div",{id:"chil2"},
        [React.createElement("h1",{},"Hello Aeiouki"),React.createElement("h3",{},"Hello Everyone")]),]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent,heading);
