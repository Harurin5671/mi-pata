import * as Yup from 'yup'

const validationSchema: Yup.ObjectSchema<Record<string, any>> = Yup.object().shape({
  email: Yup.string()
    .email('Debe ser un correo válido')
    .required('El correo es requerido')
})

export default validationSchema
