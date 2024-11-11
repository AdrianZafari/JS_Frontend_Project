import Features_row_item from "./Features_Rows_Components/Features_row_item"

function Features_rows() {
  return (
        <div className="features-row-container">

          <div className="features-row">
              <Features_row_item src={"images/features_icons/DataSec.svg"}
                                 alt={"shield"}
                                 h3={"Data Security"}
                                 text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad magni saepe corrupti, ipsam placeat?"}/>

              <Features_row_item src={"images/features_icons/EasyPay.svg"}
                                 alt={"credit card"}
                                 h3={"Easy Payments"}
                                 text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam, quos praesentium veritatis saepe labore!"}/>
          </div>


          <div className="features-row">
            <Features_row_item src={"images/features_icons/CostStat.svg"}
                                  alt={"statistics chart"}
                                  h3={"Cost Statistics"}
                                  text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla ratione possimus suscipit iure amet."}/>

            <Features_row_item src={"images/features_icons/Support.svg"}
                                  alt={"support"}
                                  h3={"Support 24/7"}
                                  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dicta! Placeat adipisci omnis minima beatae."}/>
          </div>


          <div className="features-row">
            <Features_row_item src={"images/features_icons/RegCash.svg"}
                                  alt={"wallet"}
                                  h3={"Regular Cashback"}
                                  text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus enim in dolor modi magnam distinctio!"}/>
              
            <Features_row_item src={"images/features_icons/TopStan.svg"}
                                  alt={"Smiley"}
                                  h3={"Top Standards"}
                                  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo labore harum voluptate beatae! Omnis."}/>
          </div>
      </div>
  )
}
export default Features_rows