import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {

  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArray = [];
    if (pos === props.selectedColorPos) {
      classArray.push(classes.Selected_Watch);
    }
    return(
      <img key={pos} className={classArray.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => { props.colorChangeClick(pos) }} />
    );
  });

  const Features = props.data.featureList.map((item, pos) => {
    const classArray = [classes.Features_items];
    if (pos === props.selectedFeaturePos) {
      classArray.push(classes.Select_feature);
    }
    return(
      <button key={pos} className={classArray.join(' ')} onClick={() => { props.featureOnClick(pos) }}>{item}</button>
    );
  });

  return(
    <div className={classes.ProductDetails}>
      <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <div className={classes.Select_color}>
          <h3>Select color</h3>
          <div className={classes.Diff_watches}>
            {colorOptions}
          </div>
          <h3>Features</h3>
          <div className={classes.Features}>
            {Features}
          </div>
          <button className={classes.Buynow}>
            Buy Now
          </button>
        </div>
    </div>
  );
}

export default ProductDetails;