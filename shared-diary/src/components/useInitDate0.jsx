// import React, { useState } from 'react';

function useInitDate() {
    // const DAYARR = ['日', '一', '二', '三', '四', '五', '六'];
    let dateNow = new Date();

    // 初始化今天
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const date = dateNow.getDate();
    const day = dateNow.getDay();

    return {year, month, date, day};
}

export default useInitDate;