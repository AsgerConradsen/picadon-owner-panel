import * as yup from "yup";
import "yup-phone";


const tenantsSchema = yup.array().of(yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    postalcode: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().phone("DK", true).required(),
    birthdate: yup.string(),
    move_in_date: yup.string(),
    move_out_date: yup.string(),
}))

export {tenantsSchema}