import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({
    label,
    ...otherProps
}) => {
    return (
        <GroupContainer>
            <FormInputContainer {...otherProps} />
            {label && (
                // <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                <FormInputLabel>{label}</FormInputLabel>
            )}
        </GroupContainer>
    )
}

export default FormInput;
