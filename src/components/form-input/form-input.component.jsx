import React from "react";
import './form-input.style.scss';

const FormInput = ({handleChange, lable, ...otherProps}) => (
    <div className='group'>
        <input onChange={handleChange} className='form-input' {...otherProps}/>
        {
            lable ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {lable}
                </label>)
                : null
        }
    </div>
)

export default FormInput;