import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-input',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string,
        prefix: p.any,
        suffix:p.any,
        placeholder: p.any,
        full: p.bool,
        connectNext: p.bool,
        connectPrev: p.bool,
        submit: p.any,
        textarea: p.any
    }
}
