import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Debe ser un correo válido')
    .required('El correo es requerido')
})

export default validationSchema
