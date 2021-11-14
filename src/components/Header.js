import React from 'react';

const Header = () => {
    const [searchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    
  return (
    <header>
      <input class="subreddit_input" value="javascript" />
    </header>
  )
}

export default Header;

