import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import DropdownItem from './DropdownItem';

function DropdownList({ open, action }) {

    const list = ['Profile Information','Change Password','Become PRO','Help','Log Out']

    const[active, setActive] = useState(-1);

    const select = (i) => {
        setActive(i);
        action();
    }

    const className = classnames('dropdown-wrapper', {open});

    return (
        <div className={className}>
            <ul className="dropdown">
                {list.map((title,i) => 
                    <DropdownItem key={i} title={title} current={i} active={active} select={select}></DropdownItem>
                )}
            </ul>
        </div>
    )
}

DropdownList.propTypes = {
    open: PropTypes.string,
    toggleMode: PropTypes.func
}

export default DropdownList

