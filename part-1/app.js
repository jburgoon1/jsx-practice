const App = () =>(
    <div>
        <FirstComponent />
        <NamedComponent name="Justin"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))