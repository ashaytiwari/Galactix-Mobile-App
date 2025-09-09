export interface IFormInputTextControl {
  autoCapitalize?: boolean,
  editable?: boolean,
  error?: any,
  keyboardType?: string,
  label?: string,
  onBlur?: () => void,
  onChangeText: (text: any) => void,
  placeholder: string,
  style?: any,
  value: any,
  inputStyle?: any,
  labelStyle?: any,
  multiline?: boolean
}