import React from 'react';
import { Formik } from 'formik';

export const Filter = ({ value, onChange }) => {
    return (<Formik
       initialValues={{ name: '' }}
       onSubmit={(values, actions) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    actions.setSubmitting(false);
        //  }, 1000);
       }}
    >
        <label>
            Find contacts by name
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
     </Formik>
        
    );
};