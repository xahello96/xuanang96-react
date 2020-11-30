import { TreeSelect } from 'antd';
const { TreeNode } = TreeSelect;

const renderTreeNode = list =>
    list.map(item => {
        if (item.children && item.children.length) {
            return <TreeNode title={item.groupName} value={item.uuid} key={item.uuid}>
                {renderTreeNode(item.children)}
            </TreeNode>
        } else {
            return <TreeNode title={item.groupName} value={item.uuid} key={item.uuid}></TreeNode>
        }
    })

export default renderTreeNode