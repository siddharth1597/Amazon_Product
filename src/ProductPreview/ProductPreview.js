import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
  
  const hours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return(
    <div className={classes.ProductPreview}>
      <img className={classes.ProductImage} src={props.Url} alt={props.Alt} />
      {
        !props.isHeartBeat ?
        <h2 className={classes.Watch_time}>
          {`${hours}:${minutes}`}
        </h2> 
        :
        <div className={classes.Heart_beat}>
          <i className="fas fa-heartbeat"></i>
          <h2>78</h2>
        </div>
      }
    </div>
  );
}

export default ProductPreview;