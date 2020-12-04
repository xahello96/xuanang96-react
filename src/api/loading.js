import ReactDOM from 'react-dom';
import { Spin } from "antd";
import { divide } from 'lodash';
// import _ from 'lodash';
// let needLoadingRequestCount = 0;
// let loading;

// function startLoading() {
//     loading = Loading.service({
//         text: '请求数据中...',
//         spinner: 'el-icon-loading',
//     });
// }

// function endLoading() {
//     loading.close();
// }

// const tryCloseLoading = () => {
//     if (needLoadingRequestCount === 0) {
//         endLoading();
//     }
// };

// export function showFullScreenLoading() {
//     if (needLoadingRequestCount === 0) {
//         startLoading();
//     }
//     needLoadingRequestCount++;
// }

// export function tryHideFullScreenLoading() {
//     if (needLoadingRequestCount <= 0) return;
//     needLoadingRequestCount--;
//     if (needLoadingRequestCount === 0) {
//         _.debounce(tryCloseLoading, 300)()
//     }
// }


function teat() {
    return <Spin></Spin>
}

export default teat