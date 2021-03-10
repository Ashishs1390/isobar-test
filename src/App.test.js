import { render, screen, fireEvent, waitFor, waitForElement, act} from '@testing-library/react';
import {mount,shallow,configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';


import Home from './components/Home';
import SearchBox from './components/SearchBox'
import Modal from './components/Modal'

configure({adapter: new Adapter()});


describe('test',()=>{

  test('renders Home Component', () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  
  
  });
  test('render Search Component',()=>{
    render(<SearchBox />);
    const searchElement = screen.getByTestId("searchBtn");
    expect(searchElement).toBeInTheDocument();
  });

  test("render Modal",()=>{
    render(<Modal />);
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
  });
 

})
