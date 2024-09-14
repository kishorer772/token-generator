import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import TokenGeneratorForm from './components/TokenGeneratorForm';
import TokenView from './components/TokenView';
import { TokenFormProps } from '../types/TokenForm';
import { useState } from 'react';

export default function TokenGenerator() {
  const form = useForm<TokenFormProps>();
  const [formState, setFormState] = useState<TokenFormProps | null>(null);
  const onSubmit = (values: TokenFormProps) => {
    setFormState(values);
    setTimeout(() => {
      document.querySelector('.tg-token-view')?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };
  const onReset = () => {
    form.reset();
    setFormState(null);
  };
  return (
    <div>
      <Header title="Token Generator Application" />
      <TokenGeneratorForm {...{ form, onSubmit, onReset }} />
      <div className="tg-token-view">
        {formState !== null && (
          <>
            <TokenView
              color="blue"
              length={formState.blue.length}
              perRow={formState.blue.perRow}
              prefix={formState.blue.prefix}
            />
            <TokenView
              color="red"
              length={formState.red.length}
              perRow={formState.red.perRow}
              prefix={formState.red.prefix}
            />
          </>
        )}
      </div>
    </div>
  );
}
