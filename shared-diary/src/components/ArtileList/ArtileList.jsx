import React from 'react';
import Item from './components/Item';
import './ArtileList.scss';
import './iconfont/iconfont.css';

class ArtileList extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     'show': false
        // }

        // this.handleSpread = this.handleSpread.bind(this);
    }

    // handleSpread() {
    //     console.log(this.divc);
    //     this.setState({
    //         'show': true
    //     })
    // }
    render() {
        return (
            <div className="Artile" >
                <h3 className="list-name" ><i className="iconfont">&#xe70d;</i>日记列表</h3>

                <div className="Artile-list" >
                    {
                        this.props.content.map((item, i) => {
                            return (
                                <Item item={item} key={i}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ArtileList;