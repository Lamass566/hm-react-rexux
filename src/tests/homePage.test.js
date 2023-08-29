import Home from '../pages/home/homePage'
import * as reduxHooks from 'react-redux'
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const mockDis = jest.spyOn(reduxHooks, 'useDispatch')

describe('header', () => {
    it('empty', () => {
        useSelector.mockReturnValue([])
        mockDis.mockReturnValue(jest.fn())
        const component = render(<Home />)

        expect(component).toMatchSnapshot()
    })
})
