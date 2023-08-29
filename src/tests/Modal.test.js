import Modal from '../components/modal/Modal';
import * as reduxHooks from 'react-redux'
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const mockDis = jest.spyOn(reduxHooks, 'useDispatch')


describe('Modal snapshot', () => {
    it('empty array', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const p = <p>test</p>
        const component = render(<Modal />)
        expect(component).toMatchSnapshot()
    })
})


describe('Modal unit test', () => {
    it('include in document', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const component = render(<Modal/>)
        
        waitFor(() => expect(component).toBeInTheDocument());
    })
})
