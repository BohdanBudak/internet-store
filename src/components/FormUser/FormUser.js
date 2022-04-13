import React from 'react';
import { Form, Formik} from 'formik';
import {useSelector, useDispatch} from "react-redux";
import Input from '../Input/Input';
import useStyles from './FormUserStyles'
import * as yup from 'yup';
import {clearCartList} from '../../store/operations/FormOperations';

const FIELD_REQUIRED = 'This field is required!';
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, `Please enter valid first name`)
        .matches(/^[A-Z]/, `The first letter should  be in Upper case`)
        .min(3, `Minimal length of second name should be 3`)
        .max(15, `Max length of second name should be 15`)
        .required(FIELD_REQUIRED),
    secondName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, `Please enter valid second name`)
        .matches(/^[A-Z]/, `The first letter should  be in Upper case`)
        .min(3, `Minimal length of second name should be 3`)
        .max(15, `Max length of second name should be 15`)
        .required(FIELD_REQUIRED),
    age: yup
        .number()
        .min(18, `You must be at least 18 years`)
        .max(90, `You must be at most 90 years`)
        .required(FIELD_REQUIRED),
    address: yup
        .string()
        .min(3, `Minimal length of address should be 10`)
        .max(30, `Max length of second name should be 30`)
        .required(FIELD_REQUIRED),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid! Please enter valid phone!')
        .required(FIELD_REQUIRED),
});

const FormUser = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartListReducer.cartList);

    const handleSubmit = (values, {resetForm}) => {
        setTimeout(() => {
            resetForm();
            console.log('User Info -->', values);
            if (cartList.length !== 0) {
                console.log('Cart info -->', ...cartList)
                dispatch(clearCartList());
            }
        }, 2000)
    }
  return (
      <Formik
          initialValues={{
              firstName: '',
              secondName: '',
              age: '',
              address: '',
              phone: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
      >

      <Form className={classes.userInfo} noValidate>
          <h3 className={classes.userInfoHeader}>User Info</h3>
          <Input label='First name' type='text' placeholder='First name' name='firstName'/>
          <Input label='Second name' type='text' placeholder='Second name' name='secondName'/>
          <Input label='Age' type='number' placeholder='Age' name='age'/>
          <Input label='Address' type='text' placeholder='Address' name='address'/>
          <Input label='Phone' type='tel' placeholder='Phone' name='phone'/>
          <div>
              <button className={classes.btnCheckout} type='submit'> Checkout </button>
          </div>
        </Form>
      </Formik>
  )
}

export default FormUser;