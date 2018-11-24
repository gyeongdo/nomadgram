import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Loading from 'components/Loading';
import FeedPhoto from 'components/FeedPhoto';

const cx = classNames.bind(styles);

const Feed = props => {
    // props는 containser의 state에서 옴
    if(props.loading){
        return <LoadingFeed />
    }else if (props.feed) {
        return <RenderFeed {...props} />
    }
};

const LoadingFeed = props => (
    <div className={cx('feed')}>
        <Loading />
    </div>
);

const RenderFeed = props => (
  <div className={cx("feed")}>
    {props.feed.map(photo => (
      <FeedPhoto {...photo} key={photo.id} />
    ))
    }
  </div>
);

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Feed;