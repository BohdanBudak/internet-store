import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import Modal from '../../components/modal/Modal'

describe('Initial Modal', () => {

    const props = {
        header: "",
        text: "",
        closeButton: false,
        actions: [],
        onClose: () => {}
    };

    describe('Modal text props', () => {

        it('should render a Modal with header', () => {
            const nextProps = {
                ...props,
                header: "Modal Header"
            };

            const modalComponent = render(<Modal {...nextProps}/>);
            expect(modalComponent.text()).toEqual('Modal Header');
        });

        it('should render a Modal with text', () => {
            const nextProps = {
                ...props,
                text: "Modal Main text"
            };

            const modalComponent = render(<Modal {...nextProps}/>);
            expect(modalComponent.text()).toEqual('Modal Main text');
        });
    });

    describe('Modal props Button close', () => {

        it('should render a Modal without close Button', () => {

            const modalComponent = shallow(<Modal {...props}/>);
            expect(modalComponent.find('div.modalHeader').children.length).toBe(1);
        });

    });
});