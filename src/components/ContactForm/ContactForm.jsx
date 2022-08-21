import React, { Component } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

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

//   handleInputChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value,
//       id: nanoid(),
//     });
//   };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//       id: '',
//     });
//   };

  render() {
    return (
        <div>
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
                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor={props.inputNameId}>
                            Name:
                        </label>
                        <input
                            onInput={props.handleInputChange}
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
                        <span>{props.errors.name && 'No name'}</span>
                        
                        <label htmlFor={props.inputTelId} >
                            Number:
                        </label>
                        <input
                            onInput={props.handleInputChange}
                            // value={props.state.number}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.number}
                        />
                        <span>{props.errors.number && 'No number'}</span>

          <button type="submit">
            Add contact
          </button>
                </form>
                )}
        
                </Formik>
      </div>
    );
  }
}



// class ContactForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             number: "",
//         };
//     }

//     render() {
//         const { value } = this.state;
//         const {onSubmit}= this.props;
//         return (
//             <Formik
//        initialValues={{ name: 'jared' }}
//        onSubmit={(values, actions) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            actions.setSubmitting(false);
//          }, 1000);
//        }}
//      >
//                 <form onSubmit={(e) => {
//                     e.preventDefault();
//                     onSubmit(value);
//                 }}>
//                     <label
//                         // validate={validate}
//                         value={value}
//                         onChange={(e) => {
//                             console.log("value", value);
//                             this.setState({ value: e.currentTarget.value });
//                         }}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                     {/* {errors.name && <div id="feedback">{errors.name}</div>} */}
//                     <label
//                         // validate={validateAsync}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={(e) => {
//                             console.log("value", value);
//                             this.setState({ value: e.currentTarget.value });
//                         }}
//                     />
//                     {/* {errors.number && touched.number ? (<div>{errors.number}</div>): null} */}
//                     <button type="submit">Submit</button>
//                 </form>
            
//             </Formik>
//         )
   
//     };
// };
// export { ContactForm };




