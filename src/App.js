import React, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './Utils/ProductData';

class App extends Component {
  
  state = {
    ProductData: ProductData,
    SelectedProductPos: 0,
    SelectedFeaturePos: 0,
  }

  colorOptionOnClick = (pos) => {
    this.setState({SelectedProductPos: pos});
  }

  changeFeatureOnClick = (pos) => {
    this.setState({SelectedFeaturePos: pos});
  }

  render() {
    return (
      <div className={classes.App}>
        <TopBar/>

        <main>
          <section>
            <section className={classes.Left}>
              <ProductPreview Url={this.state.ProductData.colorOptions[this.state.SelectedProductPos].imageUrl} 
              Alt={this.state.ProductData.colorOptions[this.state.SelectedProductPos].styleName} 
              isHeartBeat={this.state.SelectedFeaturePos} />
            </section>

            <section className={classes.Right}>
              <ProductDetails data={this.state.ProductData} 
              colorChangeClick={this.colorOptionOnClick} 
              selectedColorPos={this.state.SelectedProductPos}
              featureOnClick={this.changeFeatureOnClick}
              selectedFeaturePos={this.state.SelectedFeaturePos} />
            </section>
          </section>
        </main>

        <footer>
          Copyright&copy; 2021 - SidTechTalks
        </footer>
      </div>
    );
  }
}

export default App;
