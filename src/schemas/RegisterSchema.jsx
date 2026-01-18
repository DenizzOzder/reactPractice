import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    email : yup.string().email().required(),
    age: yup.number().required().positive().integer(),
    name: yup.string().required().max(20)
})