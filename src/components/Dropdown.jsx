import React, { useState } from 'react'
import Button from './Button'
import DropdownList from './DropdownList';

export default function Dropdown() {

    const[open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className="container">
            <Button action={toggle}></Button>
            <DropdownList open={open} action={toggle}></DropdownList>
        </div>
    )
}
