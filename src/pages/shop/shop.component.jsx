import React, { Component } from 'react';
import { shopData } from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  state = {
    collections: shopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
