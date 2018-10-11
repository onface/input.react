var React = require('react')
var ReactDOM = require('react-dom')
var Input = require('input.react')
class Simple extends React.Component {
    render () {
        return (
            <div>
                <Input>default</Input>
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

