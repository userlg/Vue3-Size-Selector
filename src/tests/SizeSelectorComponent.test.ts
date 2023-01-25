import { describe, it } from "vitest";

import { mount } from "@vue/test-utils";

import SizeSelectorVueComponent from "../components/SizeSelector.vue";


describe("sizeSelector Component", () => {

    test("mount app component", async () => {
        expect(SizeSelectorVueComponent).toBeTruthy();

        const wrapper = mount(SizeSelectorVueComponent, {
            props: {
                selectedSize: "M"
            }
        });

        expect(wrapper.text()).toContain("M");

        expect(wrapper.find('button').exists()).toBeTruthy();

        expect(wrapper.find('h3').exists()).toBeTruthy();

    });

    it("Render Correctly", async () => {

        const wrapper = mount(SizeSelectorVueComponent);

        expect(wrapper.html()).toMatchSnapshot();

    });

    it("Click in some button", async () => {

        const wrapper = mount(SizeSelectorVueComponent);

        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('onChangedSize');
    });

});