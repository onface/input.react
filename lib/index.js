import { Component } from "react"
import extend from "safe-extend"
import util from "util.react"
import spreadProps from "react-spread-props"
require('./index.css')
class Input extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {
            focused: false,
            uncontrolledValue: self.props.defaultValue
        }
    }
    clickPlcaeholder = () => {
        const self = this
        self.$refs['root'].focus()
    }
    render() {
        const self = this
        const ref = util.ref(self)
        let usePlaceholder = true
        if (typeof self.props.value === 'string' && self.props.value.trim() !== '') {
            usePlaceholder = false
        }
        else if (typeof self.state.uncontrolledValue === 'string' && self.state.uncontrolledValue.trim() !== ''){
            usePlaceholder = false
        }
        let rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
            self.props.className || ''
        ].join(' ')
        let domProps = spreadProps(self.props, {
            onFocus: function () {
                self.setState({focused: true})
            },
            onBlur: function () {
                self.setState({focused: false})
            },
            onChange: function (e) {
                self.setState({
                    uncontrolledValue: e.target.value
                })
            }
        })

        const classNames = util.createClassNames(self.props)
        rootClassName = rootClassName + classNames({
            '-prefix': self.props.prefix,
            '-suffix': self.props.suffix || self.props.submit,
            '-focus': self.state.focused,
            '-full': self.props.full,
            '-error': self.props.error,
            '-placeholder': usePlaceholder,
            '-connect-prev': self.props.connectPrev,
            '-connect-next': self.props.connectNext,
            '-suffix-submit': self.props.submit,
            '-textarea': self.props.textarea,
            '-hidden-input': self.props.showInput === false,
            '-adaptive': self.props.adaptive
        })
        delete domProps['placeholder']
        delete domProps['style']
        delete domProps['className']
        let controlProps = {
            className: classNames({'control-input': true}),
            ref: ref`root`
        }
        controlProps = extend(true, controlProps, domProps)
        return (
            <span className={rootClassName}  style={self.props.style}>
                <span className={classNames({'inner': true})}>
                    <span className={classNames({'prefix': true})}>{self.props.prefix}</span>
                    <span className={classNames({'control': true})}>
                        {
                            usePlaceholder && self.props.placeholder?
                            (
                                <span className={classNames({'control-placeholder': true})} onClick={self.clickPlcaeholder} >
                                   {self.props.placeholder}
                               </span>
                           ):false
                        }
                        {
                            self.props.textarea?
                            (<textarea {...controlProps}  />):
                            (<input {...controlProps}  />)
                        }
                    </span>
                    <span className={classNames({'suffix': true})}>{self.props.suffix || self.props.submit}</span>
                </span>
            </span>
        )
    }
}
require('./props').default(Input)
export default Input
module.exports = Input
