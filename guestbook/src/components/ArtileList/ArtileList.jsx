import React from 'react';
import './ArtileList.scss';
import './iconfont/iconfont.css';

class ArtileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'show': false
        }

        this.handleSpread = this.handleSpread.bind(this);
    }

    handleSpread() {
        console.log(this.divc);
        this.setState({
            'show': true
        })
    }
    render() {
        return (
            <div className="Artile" >
                <h3 className="list-name" ><i className="iconfont">&#xe70d;</i>日记列表</h3>
                <div className="Artile-list" >
                    {
                        this.props.content.map((item, i) => {
                            return (
                            <div 
                                key={i} 
                                className={this.state.show ? 'content show': 'content'}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: (`${item.html}
                                    <div class="info">
                                        <span class="email">Email:${item.email}</span>, 
                                        <span class="date">Date:${item.date}</span>
                                    </div>`
                                        )
                                    }}
                                />
                                {/* <i
                                    onClick={this.handleSpread}
                                    className="iconfont spread-btn"
                                    title="更多"
                                >&#xe67c;</i> */}
                                <i className="iconfont delete-btn" title="删除">&#xe613; </i>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ArtileList;