import { Box, Button, FormLabel, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { TokenFormProps } from '../../types/TokenForm';
import { formFields } from '../fields';

export interface IAppProps {
  form: UseFormReturn<TokenFormProps, any, undefined>;
  onSubmit: (values: any) => void;
  onReset: () => void;
}

export default function TokenGeneratorForm(props: IAppProps) {
  console.log(formFields);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = props.form;

  const getNestedError = (path) => {
    return path.split('.').reduce((acc, key) => acc && acc[key], errors);
  };
  return (
    <form
      action=""
      id="tg-form"
      onSubmit={handleSubmit(props.onSubmit)}
      onReset={props.onReset}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          width: window.innerWidth < 768 ? '80%' : '50%',
          margin: '0 auto',
          '&  .MuiInputBase-input': {
            py: 1,
          },
        }}
      >
        {formFields.map((field) => {
          const error = getNestedError(field.name);
          return (
            <>
              <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
              <TextField
                id={field.name}
                {...register(field.name as keyof TokenFormProps, {
                  ...field.validations,
                })}
                error={!!error}
                helperText={error?.message}
              ></TextField>
              {/* {!!errors[field.name] && <p>{errors[field.name]?.message}</p>} */}
            </>
          );
        })}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            '& > .MuiButton-root': {
              textTransform: 'none',
            },
          }}
        >
          <Button variant="contained" type="submit">
            Generate
          </Button>
          <Button variant="contained" type="reset" color="error">
            Clear
          </Button>
        </Box>
      </Box>
    </form>
  );
}
