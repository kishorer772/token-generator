import Header from '../components/Header';
import TokenGeneratorForm from './components/TokenGeneratorForm';
import TokenView from './components/TokenView';

export default function TokenGenerator() {
  return (
    <div>
      <Header title="Token Generator Application" />
      <TokenGeneratorForm />
      <TokenView color="blue" length={4} perRow={2} prefix="S" />
      <TokenView color="red" length={4} perRow={3} prefix="R" />
    </div>
  );
}
