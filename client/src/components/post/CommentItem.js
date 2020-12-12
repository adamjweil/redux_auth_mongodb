import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { removeComment } from '../../actions/post';

const CommentItem = ({ 
    postId, 
    comment: { _id, text, username, avatar, user, date },
    auth,
    removeComment
}) => (
    <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img
              className="round-img"
              src={avatar}
              alt=""
            />
            <h4>{username}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">
           {text}
          </p>
           <p className="post-date">
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
          <Fragment>
            {!auth.loading && user === auth.user._id && (
              <button onClick={e => removeComment(postId, _id)} type='button' className='btn btn-danger'>
                <i className='fa fa-times'></i>
              </button>
          )}
           </Fragment>
        </div>
      </div>
);

CommentItem.propTypes = {
    // postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    postId: state.post
});

export default connect(mapStateToProps, { removeComment  })(CommentItem);
