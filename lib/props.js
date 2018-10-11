import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-input',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string
    }
}
