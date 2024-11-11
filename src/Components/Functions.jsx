import ArrowBtn from "./Functions_Components/ArrowBtn"

function Functions() {
  return (
    <section id="functions">
        <div className="functions-row-container">
            <div className="functions-row-textbox">
                    <div className="functions-textbox-title">
                        <h2>Make your money<br/> transfer simple and clear</h2>
                    </div>
                    
                    <div className="functions-textbox-list">
                        <ul>
                            <li>Banking transactions are free for you</li>
                            <li>No monthly cash commission</li>
                            <li>Manage payments and transactions online</li>
                        </ul>
                    </div>
                    
                    <ArrowBtn text={"Learn More"} />

                    
            </div>

            <div className="functions-row-img">
                <img src="images/Desktop_Only/section1/block_img1.svg" alt="transfer" />
            </div>
        </div>

        <div className="functions-row-container">
            <div className="functions-row-img">
                <img src="images/Desktop_Only/section1/block_img2.svg" alt="contacts" />
            </div>

            <div className="functions-row-textbox">
                <div className="functions-textbox-title">
                    <h2>Receive payment from<br /> international bank details</h2>
                </div>
                
                <div className="functions-textbox-items">

                    <div className="functions-row-icons">
                        <div className="functions-row-icon">
                            <img src="images/features_icons/EasyPay.svg" alt="credit card" />
                        </div>
                        <div className="functions-row-icon">
                            <img src="images/features_icons/RegCash.svg" alt="wallet" />
                        </div>
                    </div>

                    <div className="functions-row-texts">
                        <div className="functions-row-text">
                            Manage your payments online. Mollis congue egestas egestas fermentum fames.
                        </div>
                        <div className="functions-row-text">
                            A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                        </div>
                    </div>

                    <ArrowBtn text={"Learn More"} />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Functions