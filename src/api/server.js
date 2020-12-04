import axios from 'axios'
import { Component } from "react";
import { baseURL } from '../config/envconfig'
import { message, Spin } from "antd";
/**
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
*/
class Server extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needLoadingRequestCount: 0,
            loading: false
        }
    }
    componentDidMount() {
        console.log(1)
    }
    aaa(name) {
        this.setState((state) => ({ loading: !state.loading }))
    }
    axios(method, url, data) {
        return new Promise((resolve, reject) => {
            let _option = {
                method,
                url,
                baseURL,
                timeout: 30000,
                params: null,
                data: data,
                headers: null,
                withCredentials: true,  //是否携带cookie发起请求
                validateStatus: (status) => {
                    return status >= 200 && status < 300
                },
            }

            axios.interceptors.request.use(config => {
                // 加载按钮在此显示
                this.setState(() => {
                    return {
                        loading: true
                    }
                })
                console.log(3)
                return config
            }, error => {
                return Promise.reject(error)
            })

            axios.interceptors.response.use(
                response => {
                    // 加载按钮在此消失
                    console.dir(response)
                    if (response.data != null) {
                        resolve(typeof response.data === 'object' ? response.data : JSON.parse(response.data))
                    }
                    return response
                },
                error => {
                    console.dir(error)
                    // 加载按钮在此消失
                    if (error.code === 'ECONNABORTED' || error.message === 'Network Error' || error.message.includes('timeout')) {
                        message.error('网络错误');
                    } else if (error.response) {
                        message.error(error.response.data)
                    }
                    return reject(error.response)
                }
            )

            axios(_option)
        })
    }
    render() {
        return (
            <div>
                <Spin spinning={this.state.loading}>{this.props.children}</Spin>
                <h1 onClick={this.aaa.bind(this, 'wxa')}>nmsl</h1>
            </div>
        )
    }
}


export default Server