import * as React from "react"
interface FormGroupWrapperProps {
  name: string
  value: string | boolean
  onChange: () => void
}

export const FormContext = React.createContext<
  FormGroupWrapperProps | undefined
>(undefined)
// TODO: For later!!!
export const FormGroupWrapper: React.FC<FormGroupWrapperProps> = ({
  children,
  name,
  value,
  onChange,
}) => {
  return (
    <FormContext.Provider value={{ name, value, onChange }}>
      {children}
    </FormContext.Provider>
  )
}
