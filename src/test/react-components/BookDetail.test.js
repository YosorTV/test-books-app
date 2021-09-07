// Core
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, unmountComponentAtNode } from 'react-dom';
import { BookDetail } from '../../components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import toJSON from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

const init = () => {
  const wrapper = shallow(<BookDetail />);
  return { wrapper };
};

describe('BookDetail component', () => {
  test('BookDetail should render without crashings', () => {
    const section = document.createElement('section');
      render(
        <ThemeProvider theme={theme}>
          <BookDetail />
        </ThemeProvider>,
      section);
      unmountComponentAtNode(section);
  })
  
  test('BookDetail snapshot', () => {
    const { wrapper } = init();
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})