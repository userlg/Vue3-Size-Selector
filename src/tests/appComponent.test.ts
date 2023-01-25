import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";

import AppVue from "../App.vue";

describe("AppVue Test", () => {

    it("App component render properly", async () => {

        const wrapper = mount(AppVue);

        expect(wrapper.html()).toMatchSnapshot();

        expect(wrapper.find("h3").text()).toEqual("M");

    });

    it("Show message h2 selector", async () => {

        const wrapper = mount(AppVue);

        expect(wrapper.find('h2').text()).toEqual('Choose your size');
    });

    it("Show component sizeSelector properly", async () => {
        const wrapper = mount(AppVue);

        expect(wrapper.findComponent({ name: 'SizeSelector' })).toBeTruthy();
    });
    
    it("Show component sizeSelector properly", async () => {
       
        const wrapper = mount(AppVue);
       
        expect(wrapper.findComponent({ name: 'SizeSelector' })).toBeTruthy();
    });

    it("Test on Updated", async () => {
        
        const wrapper = mount(AppVue);

        const buttons = wrapper.findComponent({ name: 'SizeSelector' }).findAll('button');

        await buttons[0].trigger('click');

        expect(wrapper.findComponent('onUpdated')).toBeTruthy();

    });
});