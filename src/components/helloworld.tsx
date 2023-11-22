import { calculateAge } from '../utils/age';
import ModuleDetaisl from './moduleTetaisl';

function HelloWorld() {
  const name = 'João Victor';
  const birth = '03/07/2000';
  const age = calculateAge(birth);
  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p style={ { color: 'green', textAlign: 'center' } }>{`Age ${age}`}</p>

      <ModuleDetaisl />
    </div>
  );
}
export default HelloWorld;
