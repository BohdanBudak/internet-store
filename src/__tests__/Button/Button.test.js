import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {render, mount} from 'enzyme';
import Button from '../../components/button/Button';


describe('Button component', () => {

    const props = {
        text: '',
        backgroundColor: '',
        width: '',
        height: '',
        fontSize: '',
        type: '',
        onClick: () => {}
    };

    describe('Button text props', () => {

        it('should render Button with text Add to Cart', () => {

            const nextProps = {
                ...props,
                text: "Add to Card"
            };

            const wrapper = render(<Button {...nextProps}/>);
            expect(wrapper.text()).toEqual('Add to Card');
        });

        it('should render Button with Favorite Star', () => {

            const iconFavorite = <i className="fas fa-star"/>;
            const nextProps = {
                ...props,
                text: iconFavorite
            };

            const wrapper = render(<Button {...nextProps}/>);
            expect(wrapper.find('i').hasClass('fas')).toEqual(true);
        });


        it('should render Button with properties' , () => {

            const nextProps = {
                ...props,
                width: '10',
                height: '10',
                fontSize: '10',
            };

            const wrapper = render(<Button {...nextProps}/>);
            expect(wrapper.get('0').attribs.style).toEqual('width:10px;height:10px;font-size:10px');
        });
    });


    describe('Button text props', () => {

        it('should render Button with type = "Button"', () => {

            const nextProps = {
                ...props,
                type: "button"
            };

            const wrapper = render(<Button {...nextProps}/>);
            expect(wrapper.get('0').attribs.type).toEqual('button');
        });
    });

    describe('Button click', () => {

        it('simulates click events', () => {
            const onButtonClick = jest.fn();
            const nextProps = {
                ...props,
                text: "Ok",
                type: 'button',
                onClick: onButtonClick
            };

            const wrapper = mount(<Button {...nextProps}/>);
            wrapper.props().onClick();
            expect(onButtonClick).toHaveBeenCalled();
        });
    });
});