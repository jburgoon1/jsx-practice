const App = () =>(
    <div>
        <Person name="Justin" age={25} hobbies={["gaming","hiking","lifting"]}/>
        <Person name="Julie" age={25} hobbies={["planting","hiking","photo"]}/>
        <Person name="dusty" age={3} hobbies={["eating","sleeping","meowing"]}/>
    </div>
)
ReactDOM.render(<App/>, document.getElementById('root'))