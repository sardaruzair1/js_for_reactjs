// Simple Function
// fow exporting this simple function you have to write
// export default
function DoSomething () {
    console.log('hello world')
}

// Arrow Function
// fow exporting this Arrow function you have to write
// export
const DoSomething = () => {
    console.log('hello world')
}

// Arrow Functions in React Js

const MyComponent = () => {
    return <div>hello World</div>
}

// anonymous function
// execute command without function naming
<button onClick={() => {
    console.log("hello world")
}}>

</button>