import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem({ title, current, active, select }) {
    return (
        <li className={current === active ? 'active' : ''}>
            <a href="/" onClick={(e)=>{
                e.preventDefault();
                select(current);
            }}>{title}</a>
        </li>
    )
}

DropdownItem.propTypes = {
    title: PropTypes.string,
    current: PropTypes.number,
    active: PropTypes.number,
    select: PropTypes.func
}

export default DropdownItem

