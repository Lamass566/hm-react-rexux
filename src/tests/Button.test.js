import Button from '../components/button/Button';
import * as reduxHooks from 'react-redux'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const mockDis = jest.spyOn(reduxHooks, 'useDispatch')


describe('button snapshot', () => {
    it('empty array', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const p = <p>test</p>
        const component = render(<Button children={p} bg="dark" display="none" type="ADD" closeModal={jest.fn()}/>)
        expect(component).toMatchSnapshot()
    })
})


describe('button unit test', () => {
    it('include in document', () => {
        mockDis.mockReturnValue(jest.fn())
        useSelector.mockReturnValue([])
        const p = <p>test</p>
        render(<Button children={p} bg="dark" display="none" type="ADD" closeModal={jest.fn()}/>)
        const element = screen.getByText(/test/i)
        expect(element).toBeInTheDocument()
    })
})
