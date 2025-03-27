import { useState } from 'react';
import { Switch } from 'react-native';
import { ViewThemed } from '@/presentation/shared/ViewThemed';
import { CardThemed } from '@/presentation/shared/CardThemed';
import { SwitchThemed } from '@/presentation/shared/SwitchThemed';

const Switches = () => {
	const [state, setState] = useState({
		isActive: false,
		isHungry: true,
		isHappy: false,
	});

  return (
    <ViewThemed isMargin>
      {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({...state, isActive: value})}
          value={state.isActive}
        /> */}

			<CardThemed className='p-4'>
				<SwitchThemed
					value={state.isActive}
					onValueChange={(value) => setState({...state, isActive: value})}
					text='Activo'
					className='mb-5'
				/>

				<SwitchThemed
					value={state.isHungry}
					onValueChange={(value) => setState({...state, isHungry: value})}
					text='Hambriento'
					className='mb-5'
				/>

				<SwitchThemed
					value={state.isHappy}
					onValueChange={(value) => setState({...state, isHappy: value})}
					text='Contento'
					className='mb-5'
				/>
			</CardThemed>
    </ViewThemed>
  );
};

export default Switches;
