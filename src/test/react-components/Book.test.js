import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Book } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

const init = (book) => {
  const wrapper = shallow(<Book {...book} />);
  const image = wrapper.find('#img');
  const title = wrapper.find('#title');
  const action = wrapper.find('#action');

  return { wrapper, image, title, action };
};

describe('Book component', () => {
  test('Book should render without crashings', () => {
      const div = document.createElement('div');
      render(
      <BrowserRouter>
          <Book />
      </BrowserRouter>, div);
      unmountComponentAtNode(div);
  })
  test('Book action text equal to "More information"', async () => {
    const { action } = init();
    expect(action.text()).toBe('More information')
  })
  test('Book snapshot', () => {
    const { wrapper } = init();
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})

