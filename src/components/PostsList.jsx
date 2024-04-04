import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

const PostsList = () => {
    return (
      <>
        <NewPost />
        <ul className={classes.posts}>
          <Post author="Derek" body="React.js is awesome!" />
          <Post author="Nicole" body="Check out the full course!" />
        </ul>
      </>
    );
}

export default PostsList;