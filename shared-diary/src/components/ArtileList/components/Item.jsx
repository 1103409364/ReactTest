import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';

function Item(props) {
    // 是否处于展开状态
    const [isSpread, changeSpread] = useState(false);
    // 内容是否溢出
    const [isOverflow, changeOverflow] = useState(false);
    // 隐藏自己，点击删除的时候，隐藏，假装被删除了
    const [isHide, changeHide] = useState(false);
    // 获取列表项目的 dom
    const itemDiv = useRef(null);

    // 初始化时带有副作用的操作放在这里，获取 dom 样式
    useEffect(() => {
        checkOverflow();
    });
    // 展开按钮的事件处理函数
    const handleSpread = () => {
        changeSpread(!isSpread);
        // 得到内容的真实高度
        let defaultH = 200;
        let targetH = itemDiv.current.scrollHeight;
        targetH = isSpread ? defaultH : targetH;
        itemDiv.current.style.height = targetH + 'px'
    }
    // 删除操作
    const handleDelete = () => {
        axios.get("do/delete.php", {
            params: {
                "id": parseInt(props.item.id)
            }
        }).then(res => {
            // 立即隐藏自己，删除失败再重新显示
            if (window.confirm('确定要删除吗？')) {
                deleteSelf();
            }
            
            if (!res.data === 'ok') {
                // 删除失败，重新显示
                changeHide(false);
                alert('服务器错误');
            }
        })
    }

    const deleteSelf = () => {
        // console.log('删除自己');
        changeHide(true);
    }

    // 检查内容是否溢出
    const checkOverflow = () => {
        let defaultH = 200;
        let isOverflow = itemDiv.current.scrollHeight > defaultH;
        changeOverflow(isOverflow);
    }
    // 样式由多个 classname 决定，classname 由多个条件决定
    let itemDivClass = classNames({
        'item': true,
        'overflow': isOverflow,
        'hide': isHide,
    })

    return (
        <div className={itemDivClass} ref={itemDiv}>
            <div
                dangerouslySetInnerHTML={{
                    __html: (`${props.item.html}
                        <div class="info">
                            <span class="email">Email：${props.item.email}</span>，
                            <span class="date">日期：${props.item.date}</span>
                        </div>`
                    )
                }}
            />
            <i
                onClick={handleSpread}
                className="iconfont spread-btn"
            > {isSpread ? '收起' : '…… 更多'} &#xe67c;</i>
            <i
                onClick={handleDelete}
                className="iconfont delete-btn"
                title="删除">&#xe613;
            </i>
        </div>
    )
}

export default Item;