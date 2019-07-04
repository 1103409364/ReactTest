import React from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style.js';

class Recommend extends React.PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((item) => (
                        <RecommendItem key={item.get('id')}>
                            <a href={item.get('link')}>
                                <img alt="pic" src={item.get('imgUrl')} />
                            </a>
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        recommendList: state.getIn(['home', 'recommendList']),
    }
}

export default connect(mapStateToProps, null)(Recommend);