import React, { useState } from 'react';
import './Pagination.scss';

// 接收回调和总页数
function Pagination(props) {
    // 不用 Hook直接使用闭包是不行的，不会触发视图更新
    // var pageIndex = 1;
    // const setIndex = (i) => {
    //     pageIndex = i;
    // }

    const [pageIndex, setIndex] = useState(1);

    const callback = props.callback;
    const totalPages = props.totalPages;

    // 上一页
    const handlePrev = () => {
        if (pageIndex > 1) {
            setIndex(pageIndex - 1);
            // setIndex 是异步的，回调参数应该立即 - 1
            callback(pageIndex - 1);
        }
    }
    // 下一页
    const handleNext = () => {
        if (pageIndex < totalPages) {
            setIndex(pageIndex + 1);
            callback(pageIndex + 1);
        }
    }
    // 点击页码
    const handleClickPage = (i) => {
        setIndex(i);

        // 点击当前页不调用回调函数
        i !== pageIndex && callback(i);
    }

    // 页码数组
    let liArr = [];

    // 分类讨论，头6页，尾6页，中间部分
    if (pageIndex < 6) {
        let length = totalPages <= 6 ? totalPages : 6;
        // for (let i = 1; i <= length; i++) {
        //     liArr.push(i);
        // }
        liArr = [...Array(length + 1).keys()].slice(1);

    } else if (pageIndex > totalPages - 5) {
        liArr = [totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
        liArr = [1, '...', pageIndex - 3, pageIndex - 2, pageIndex - 1, pageIndex, pageIndex + 1, pageIndex + 2, pageIndex + 3, '...', totalPages];
    }

    return (
        <div className="pagination">
            <ol>
                <li className={pageIndex !== 1 ? "prev" : "hide"} onClick={handlePrev}>{"上一页"}</li>
                {
                    liArr.map((item, index) => {
                        return <li
                            key={item + index}
                            // 根据当前内容添加不同的 classname，三种情况
                            className={item === pageIndex ? "cur" : item === "..." ? "eclipse" : ""}
                            onClick={item !== "..." ? () => { handleClickPage(item) } : null}
                        >{item}
                        </li>
                    })
                }
                <li className={pageIndex !== totalPages ? "next" : "hide"} onClick={handleNext}>{"下一页"}</li>
            </ol>
        </div>
    );
}

export default Pagination;