import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Must be a valid email')
    .min(3, 'Username must include 3 or more characters'),
    email: yup
    .string()
    .trim()
    .required('Must be a valid email'),
    password: yup
    .string()
    .trim()
    .required('please enter a password')
    .min(3, 'Password must conatin 3 or more characters'),
    terms: yup
    .boolean()
    .oneOf([true], 'Must accept the ToS')
})
export default formSchema;