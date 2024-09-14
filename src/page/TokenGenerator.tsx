import Header from '../components/Header';
import TokenGeneratorForm from './components/TokenGeneratorForm';

export default function TokenGenerator() {
  return (
    <div>
      <Header title="Token Generator Application" />
      <TokenGeneratorForm />
    </div>
  );
}
