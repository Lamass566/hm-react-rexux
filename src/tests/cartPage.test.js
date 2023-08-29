import Carts from '../pages/carts/cartPage';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe('header', () => {
    it('empty', () => {
        useSelector.mockReturnValue([])
        const component = render(<Carts />)

        expect(component).toMatchSnapshot()
    })
})
