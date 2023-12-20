

import'./Card';
import Card from './Card';
import { cardDetails } from './data';
import { cardStyles } from '../styles/cardStyles';
function App() {
    
  return (
   <div style={cardStyles.mainContainer}>
    <Card  cardInfo={cardDetails.card1} />
    <Card  cardInfo={cardDetails.card2} />
    <Card  cardInfo={cardDetails.card3} /> 
   </div>
  );
}

export default App;
