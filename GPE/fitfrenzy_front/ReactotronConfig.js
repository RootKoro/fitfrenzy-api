import Reactotron from "reactotron-react-native";
import { NativeModules } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { reactotronRedux } from 'reactotron-redux';

const hostname = NativeModules.SourceCode.scriptURL
  .split("://")[1] // Remove the scheme
  .split("/")[0] // Remove the path
  .split(":")[0]; // Remove the port
/* 
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: hostname }) // configure the hostname for Expo
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default reactotron; */


const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        name: 'My app name',
        host: hostname
    })
    
    .useReactNative({

        asyncStorage: true, // there are more options to the async storage.
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/,
        },
        editor: false, // there are more options to editor
        overlay: false // just turning off overlay
    })
    .use(reactotronRedux())
    .connect();

export default reactotron;