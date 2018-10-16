var React = require('react')
var ReactDOM = require('react-dom')
var Input = require('input.react')
class Simple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render () {
        const self = this
        return (
            <div>
                <Input />
                {' '}
                <Input prefix="https://" />
                <Input error />
                {' '}
                <Input suffix="@onface.live" />
                <hr/>
                <Input prefix="www." suffix=".com" />
                <hr/>
                <Input placeholder="占位内容" />
                <hr/>
                <Input defaultValue="abc" placeholder="占位内容" />
                <hr/>
                <Input value={self.state.value} onChange={(e) => {
                        self.setState({value: e.target.value})
                }} placeholder="占位内容" />
                <hr/>
                <Input full />
                <hr/>
                <Input style={{fontSize: '2em'}} defaultValue="大" />
                <hr/>
                <Input connectNext /><Input connectPrev  />
                <hr/>
                <Input connectNext /><Input connectPrev connectNext /><Input connectPrev  />
                <hr/>
                <Input style={{fontSize: '2em'}} submit={(<img src="https://onface.live/design/media/nice/upload.svg"/>)} />
                <hr/>
                <Input textarea />
                <hr/>
                <Input textarea submit={(<img src="https://onface.live/design/media/nice/upload.svg"/>)} />
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)
