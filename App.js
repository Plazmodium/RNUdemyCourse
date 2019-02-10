import { Navigation } from "react-native-navigation"

//register screen
Navigation.registerComponent("AuthScreen",() => require("./src/screens/Auth/Auth").default)

//run navigation app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "AuthScreen"
      }
    }
  });
});
