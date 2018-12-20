import React from 'react';
import styles from './MyVideo.css';
import {Input} from 'antd';
import { log } from 'util';
// eslint-disable-next-line
import * as flvjs from './lib/flv';

export default class MyVideo extends React.Component {
    constructor({streamUrl}){
        super();
        this.state = {src: streamUrl};
        this.bindAll(this);
    }
    createPlayer(){
        this.player = window.flvjs.createPlayer({
            type: 'flv', url: this.state.src, isLive: true
        }, {
            enableWorker: false,
            lazyLoadMaxDuration: 3 * 60,
            seekType: 'range',
        });
        this.player.attachMediaElement(this.video);
        this.player.load();
    }
    
    componentDidMount() {
        if (typeof this.player !== "undefined") {
            if (this.player != null) {
                this.player.unload();
                this.player.detachMediaElement();
                this.player.destroy();
                this.player = null;
            }
        }
        // request(['http://localhost:8000/flv.js'], this.createPlayer);
       this.createPlayer();
    }

    componentDidUpdate(prevProps) {
        this.componentDidMount();
    }

    onPressEnterHandler(txt) {
        log('' + txt.target.value);
        this.setState({src: '' + txt.target.value});
    }

    render() {
        const {src} = this.state;
        return (
            <div >
                <Input addonBefore="" defaultValue="http://aldirect.flv.huya.com/huyalive/90001-2622305980-11262718424205230080-734400720-10057-A-0-1.flv?wsSecret=e323d1264bc63c1677a477d2069d884c&wsTime=5c17395b&ratio=4000" 
                ref={i=>this.input=i} onPressEnter={this.onPressEnterHandler}/>
                <video name="videoElement" className={styles.centeredVideo} autoPlay controls
                   src={src} ref={v=>this.video=v}>
                  Your browser is too old which doesn't support HTML5 video.
                </video>

            </div>
            );
    } 

    
    /**
     * 遍历对象，绑定全部函数
     * @param {*} target 要绑定到的目标
     * @param {*} proto 要执行绑定的对象，省略则以target为目标
     * @returns {void}
     */
    bindAll(target, proto) {
    if (proto === undefined) {
        // eslint-disable-next-line
        proto = Object.getPrototypeOf(target);
    }
    Object.getOwnPropertyNames(proto).forEach(name => {
        const value = target[name];

        if (typeof value === 'function') {
            target[name] = value.bind(target);
        }
    });
}

}

