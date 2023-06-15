import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsList from "./src/NewsList";
import NewsDetail from "./src/NewsDetail";

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsList"
          component={NewsList}
          options={{ title: 'Ultimas noticias' }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{ title: 'Detalle noticias' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;