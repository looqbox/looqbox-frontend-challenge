/* ACTION TYPES */
import { UPDATE_DATA, ADD_DATA } from './action-types'

export const updateData = (data, shouldAdd) => {
  /* Check if should add instead of update the data (for paginated results) */
  return shouldAdd
    ? {
      type: ADD_DATA,
      data
    }
    : {
      type: UPDATE_DATA,
      data
    }
}

// export const updateData = data => ({
//   type: UPDATE_DATA,
//   data
// })


/* router */
// import history from '../../history'

/* helpers */
// import { clearValues, setValuesWithId, setDestroyForAgeRelationships, editCustomer } from '../../helpers/form-submit';
// import { pipe, partial } from 'ramda';

/* submit */
// export const submit = (values, formikBag) => {
//   const data = pipe(
//     /* clear empty fields */
//     clearValues,
//     /* set __id for removable fields */
//     partial(setValuesWithId, [['phones', 'emails', 'driver_license', 'parent']])
//   )(values);

//   /* scroll page to top */
//   scrollTo(0, 0);
//   /* clear form */
//   formikBag.resetForm();

//   /* send data */
//   return {
//     type: ADD_CUSTOMER,
//     data
//   }
// }

// /* edit */
// export const edit = (values, initialValues, id) => {
//   const data = pipe(
//     /* set destroy for 'parent' / 'driver_license' if necessary */
//     partial(setDestroyForAgeRelationships, [initialValues]),
//     /* edit data (remove, add, modify) */
//     partial(editCustomer, [initialValues]),
//     /* clear empty fields */
//     clearValues,
//     /* set id for removable fields */
//     partial(setValuesWithId, [['phones', 'emails', 'driver_license', 'parent']])
//   )(values);

//   /* return to 'add customer' form */
//   history.push('/');

//   /* send data */
//   return {
//     type: EDIT_CUSTOMER,
//     data,
//     id
//   }
// }
