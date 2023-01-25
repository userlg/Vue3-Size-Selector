import { mount } from "@vue/test-utils";

import SizeSelectorVueComponent from "../components/SizeSelector.vue";


test("mount app component", async () => {
    expect(SizeSelectorVueComponent).toBeTruthy();

    const wrapper = mount(SizeSelectorVueComponent, {
    });

    expect(wrapper.text()).toContain("M");

});