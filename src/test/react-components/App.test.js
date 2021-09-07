// Core
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Error, Loader } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    test('App should render without crashings', () => {
        const div = document.createElement('div');
        render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, div);
        unmountComponentAtNode(div);
    })
    test('Loader component should render without crashings', () => {
        const div = document.createElement('div');
        render(<Loader />, div);
        unmountComponentAtNode(div);
    })
    test('Error notification should render without crashings', () => {
        const div = document.createElement('div');
        render(<Error />, div);
        unmountComponentAtNode(div);
    })
})
