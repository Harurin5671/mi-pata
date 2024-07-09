import React, { type ReactNode } from 'react'
import { View } from 'react-native'
import { Formik, type FormikHelpers, type FormikProps } from 'formik'
import type * as Yup from 'yup'

interface FormValues {
  email: string
  password: string
}

interface FormProps {
  initialValues: FormValues
  validationSchema: Yup.ObjectSchema<Record<string, any>>
  onSubmit: (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => Promise<void> | Promise<any>
  children: (props: FormikProps<FormValues>) => ReactNode
}

const Form: React.FC<FormProps> = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
        <View style={{ alignItems: 'center', width: '100%' }}>
          {children(formikProps)}
        </View>
        )}
      </Formik>
  )
}

export default Form
