import React, {useState} from 'react';
import styleHoc from '../HOCS/styleHOC';

const Toggle = ({style, children}) => {
    const [on, setOn]  = useState(false)

    return (
        <div style={style}>
            {on && children}
            <button onClick={() => setOn(!on)} style={style}
        </div>
    )
}