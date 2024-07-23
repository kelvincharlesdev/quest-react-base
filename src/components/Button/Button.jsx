import PropTypes from 'prop-types'

export const Button = ({ label }) => {
    return (
        <button>A label desse botão é:  {label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
}