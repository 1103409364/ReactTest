import React, { useState, useRef, useEffect } from 'react';

function Item(props) {
    const [isSpread, changeSpread] = useState(false);
    const [isOverflow, changeOverflow] = useState(false);

    const itemDiv = useRef(null);

    const handleClick = () => {
        changeSpread(!isSpread);
        // 得到内容的真实高度
        let defaultH = 200;
        let targetH = itemDiv.current.scrollHeight;

        // itemDiv.current.offsetWidth;
        targetH = isSpread ? defaultH : targetH;
        itemDiv.current.style.height = targetH + 'px'
        // console.log(targetH, itemDiv.current.scrollHeight );
    }

    useEffect(() => {
        checkOverflow();
    });

    const checkOverflow = () => {
        let defaultH = 200;
        let isOverflow = itemDiv.current.scrollHeight > defaultH;
        changeOverflow(isOverflow);
    }

    return (
        <div className={isOverflow ? 'item overflow' : 'item'} ref={itemDiv} >
            <div
                dangerouslySetInnerHTML={{
                    __html: (`${props.item.html}
                        <div class="info">
                            <span class="email">Email:${props.item.email}</span>, 
                            <span class="date">Date:${props.item.date}</span>
                        </div>`
                    )
                }}
            />
            <i
                onClick={handleClick}
                className="iconfont spread-btn"
            > {isSpread ? '收起' : '…… 更多'} &#xe67c;</i>
            <i className="iconfont delete-btn" title="删除">&#xe613; </i>
        </div>
    )
}

export default Item;