import React, { Component } from 'react';
import Mason, { Canvas } from 'mason-library';

export default class Home extends Component {
  componentDidMount() {
    Mason({
      apiKey:'rAlpgEElYLXQP5jWCArw1MaETqIhopJPQDsaRovYmH8=',
      componentIds: [
        '5b74427fc36bfc00038543b6', // Home_HeroBanner
        '5b7450afbd684e0003c2b6ee', // Home_ContentMain
      ],
    });
  }

  render() {
    return (
      <div>
        <Canvas id="5b74427fc36bfc00038543b6" />
        <div class="mw-body">
          <Canvas id="5b7450afbd684e0003c2b6ee" />
        </div>
      </div>
    )
  }
}
