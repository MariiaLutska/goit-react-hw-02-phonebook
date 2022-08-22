import React, { Component } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Box } from '../Box';


let formSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
});



const INITIAL_VALUES = {
    name: '',
    number: '',
    id: '',
};

export class ContactForm extends Component {
  state = {
    ...INITIAL_VALUES,
  };

  inputNameId = nanoid();
  inputTelId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITIAL_VALUES,
    });
  };

  render() {
    return (
      <Box display="flex">
        <Formik
          initialValues={{ ...INITIAL_VALUES }}
          validationSchema={formSchema}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
        >
          {props => (
            <Form onSubmit={this.handleSubmit}>
              <Box display="flex"
              flexDirection="column">
          <label htmlFor={props.inputNameId}>
            Name:
          </label>
          <Field
            onInput={this.handleInputChange}
            // value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                id={props.inputNameId}
                onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
                />
                <ErrorMessage name="name" />

          <label htmlFor={props.inputTelId} >
            Number:
          </label>
          <Field
            onInput={this.handleInputChange}
            // value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                id={props.inputTelId}
                onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.number}
                />
                <ErrorMessage name="number" />

          <button type="submit">
            Add contact
                </button>
                </Box>
              </Form>
          )}
     </Formik>
        
      </Box>
    );
  }
}







// let formSchema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.number().required(),
// });

// const INITIAL_VALUES = {
//     name: '',
//     number: '',
//     id: '',
// };

// export class ContactForm extends Component {
//   state = {
//   ...INITIAL_VALUES,
//   };

//   inputNameId = nanoid();
//   inputTelId = nanoid();

// //   handleInputChange = e => {
// //     const { name, value } = e.target;

// //     this.setState({
// //       [name]: value,
// //       id: nanoid(),
// //     });
// //   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

// //   reset = () => {
// //     this.setState({
// //       name: '',
// //       number: '',
// //       id: '',
// //     });
// //   };

//   render() {
//     return (
//         <div>
//             <Formik
//                 initialValues={{ ...INITIAL_VALUES }}
//                 validationSchema={formSchema}
//                 onSubmit={(values, actions) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         actions.setSubmitting(false);
//                     }, 1000);
//                 }}
//             >
//                 {props => (
//                     <form onSubmit={props.handleSubmit}>
//                         <label htmlFor={props.inputNameId}>
//                             Name:
//                         </label>
//                         <input
//                             onInput={props.handleInputChange}
//                             // value={this.state.name}
//                             type="text"
//                             name="name"
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             required
//                             id={props.inputNameId}
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.name}
//                         />
//                         <span>{props.errors.name && 'No name'}</span>
                        
//                         <label htmlFor={props.inputTelId} >
//                             Number:
//                         </label>
//                         <input
//                             onInput={props.handleInputChange}
//                             // value={props.state.number}
//                             type="tel"
//                             name="number"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             onChange={props.handleChange}
//                             onBlur={props.handleBlur}
//                             value={props.values.number}
//                         />
//                         <span>{props.errors.number && 'No number'}</span>

//           <button type="submit">
//             Add contact
//           </button>
//                 </form>
//                 )}
        
//                 </Formik>
//       </div>
//     );
//   }
// }