import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        streamUrl: 'https://tc-tct.douyucdn2.cn/dyliveflv3/5515269rWjTrjDAX.flv?wsAuth=b0a73052cd0fc1ee263c249fbdd8823f&token=web-douyu-10165440-5515269-bb67e666fad59e3cd13df2e61b1d4984&logo=0&expire=0&did=335ebc66ac56f5b5ec3cf02b00011501&ver=Douyu_218121321&pt=2&st=0&mix=0',
        //streamUrl: 'rtmp://192.168.1.105:1935/live',
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/myVideo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
