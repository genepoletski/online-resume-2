import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});
