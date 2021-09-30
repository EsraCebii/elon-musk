import React from 'react';
import "./styles.css";
import AnimatedNumber from "animated-number-react";
import { useSelector} from "react-redux"


function Header() {
  const money = useSelector(state => state.products.money)
  const moneyArray = useSelector((state) => state.products.moneyArray[0]);
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>

        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Elon Musk</h5>
              <footer className="blockquote-footer">
                <small className="text-muted">I operate on the physics approach to analysis. You boil things down to the first principles or fundamental truths in a particular area and then you reason up from there.</small>
              </footer>
              <p className="card-text"><small className="text-muted">CEO and Chairman, Tesla
              </small></p>

            </div>
          </div>
        </div>
      </div>
      <div className="money">
      $ <AnimatedNumber
          value={money}
          
        />
      </div>
    </>
  )
}

export default Header;
