
import { cardStyles } from '../styles/cardStyles';
const Card = ({cardInfo})=>{
    const {tag,price,color,key1,key2,key3,key4} =cardInfo;
   
    return (
       <div>
            <div >
                <div  style={cardStyles.cardContainer}>
                    <div  style={cardStyles.titleContainer}>
                        <p  style={cardStyles.title}  >{tag}</p>
                        <h1 style={cardStyles.heading}>${price}/month</h1>
                        <hr style={cardStyles.horizontalBreak}/>
                    </div>
                    <div className="feature-container">
                        <p style={cardStyles.available}>&#10004; Single User</p>
                        <p style={cardStyles.available}>&#10004; 50GB Strorage</p>
                        <p style={cardStyles.available}>&#10004; Unlimited Public Projects</p>
                        <p style={cardStyles.available}>&#10004; Community Access</p>
                        <p style={key1.isAvailable ? cardStyles.available : cardStyles.notAavailable}>{key1.content} </p>
                        <p style={key2.isAvailable ? cardStyles.available : cardStyles.notAavailable}>{key2.content} </p>
                        <p style={key3.isAvailable ? cardStyles.available : cardStyles.notAavailable}>{key3.content} </p>
                        <p style={key4.isAvailable ? cardStyles.available : cardStyles.notAavailable}>{key4.content} </p>
                    </div>
                    <div style={cardStyles.buttonContainer}>
                        <button style={cardStyles.button}>BUTTON</button>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Card;