import Card from "../components/productCard/card";
import * as reduxHooks from 'react-redux'
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const mockDis = jest.spyOn(reduxHooks, 'useDispatch')


describe('Card snapshot', () => {
    it('empty array', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const p = <p>test</p>
        const component = render(<Card />)
        expect(component).toMatchSnapshot()
    })
})


describe('Card unit test', () => {
    it('include in document', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const thisCard = {}
        const component = render(<Card/>)
        
        waitFor(() => expect(component).toBeInTheDocument());
    })
})
