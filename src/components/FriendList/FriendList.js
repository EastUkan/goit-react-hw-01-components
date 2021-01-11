import PropTypes from "prop-types";
import styles from "./FriendList.module.css";


function FriendList(props) { 
  const { friends } = props;
  return (<ul className={styles.friendsList} >
  {
      (friends.map((friend) => (
        <li className={styles.friendItem} key={friend.name}>
          <span className={styles.friendStatus}
            style={{ backgroundColor: friend.isOnline ? '#1ee352' : '#eb3915' }}
          >
          </span>
          <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
          <p className="name">{friend.name}</p>
      </li>
    )))
  }
</ul>)
}

FriendList.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;



