import React from 'react'
import PropTypes from 'prop-types'

function Button({ action }) {

    return (
        <button className="btn" onClick={action}>
          Account Settings
          <i className='material-icons'>public</i>
        </button>
    )
}

Button.propTypes = {
    action: PropTypes.func
}

export default Button

