

const heading = React.createElement("h1", { className: "heading" }, "Hello World From React") //returns an object with info about tag , attributes, content

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root")) //return object with info about html seleted tag

console.log(root)
root.render(heading)  // this render function basicll convert react object into tag and insert into html



const div = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement('div',
        { id: 'child' },
        [heading, heading]
    ), React.createElement('div',
        { id: 'child' },
        [heading, heading]
    )])

root.render(div)