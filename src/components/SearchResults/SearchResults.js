import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
  }
  
  render() {
    const {cards} = this.props;
    
    return (
      <section className={styles.component}>
        {/*<h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>*/}
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} /> 
        ))}
      </section>
    );
  }
}

export default SearchResults;