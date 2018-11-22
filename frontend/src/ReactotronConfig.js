import Reactotron from 'reactotron-react-js';
import { reactotron, reactotronRedux } from 'reactotron-redux';


Reactotron.configure({ name:"Nomadgram"})
    .use(reactotronRedux())    
    .connect();

export default Reactotron;