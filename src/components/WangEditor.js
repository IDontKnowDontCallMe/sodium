import React, { Component } from 'react';
import E from 'wangeditor'

class WangEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.editorPoint = null;
    }
    render() {
        return (
            <div>
                {/* 将生成编辑器 */}
                <div ref="editorElem" style={{textAlign: 'left'}}></div>
                {/*<button onClick={this.getContent.bind(this)}>获取内容</button>*/}
            </div>
        );
    }
    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        // editor.customConfig.onchange = html => {
        //     this.setState({
        //         editorContent: html
        //     })
        // }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            //'table',  // 表格
            //'video',  // 插入视频
            //'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
        this.editorPoint = editor
    }

    getContent() {
        return this.editorPoint.txt.html()

    }
}

export default WangEditor;