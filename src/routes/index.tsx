//Separando para saber as rotas que o usuário deve ter acesso
import { Box } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { SignIn } from '../Screens/SignIn';

export function Routes(){
  const { user } = useAuth();

  return(
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        { user.name ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </Box>
  );
};