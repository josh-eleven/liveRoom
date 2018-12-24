import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MyVideo from '../components/MyVideo';

function IndexPage ({ dispatch, streamUrl }) {
	return (
		<div className={styles.normal}>
			<MyVideo streamUrl={streamUrl}></MyVideo>
		</div>
	);
}

IndexPage.propTypes = {
};

export default connect(({streamUrl})=>({streamUrl}))(IndexPage);
