import React from 'react';
import Item from './components/Item';
import './ArtileList.scss';
// import './iconfont/iconfont.css';

function ArtileList(props) {
    return (
        <div className="Artile" >
            <h3 className="list-name" ><i className="iconfont"> &#xe642; </i>日记列表</h3>

            <div className="Artile-list" >
                {
                    props.content.map((item) => {
                        return (
                            <Item item={item} key={parseInt(item.id)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArtileList;