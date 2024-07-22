import PropTypes from 'prop-types'

export const ColoredParagraph = ({ texto, color = 'blue' }) => {
    return (

        <div>
            <p style={{ color: color }}>{texto.toUpperCase()}</p>
        </div>

    );
}


ColoredParagraph.propTypes = {
    texto: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}