const Button = props => {
    const{name}=props;
    return{
        <div className="container">
            <h1 className="heading">Social Buttons</h1>
            <div>
                <button className="like">{name}</button>
                <button className="comment">{name}</button>
                <button className="share">{name}</button>
            </div>
        </div>
        
    };
  //  Write your code here.
};

const element = (
    <div>
    <Button name="Like" />>
    <Button name="Comment" />>
    <Button name="Share" />>
    </div>
);

ReactDOM.render(element, document.getElementById('root'))
