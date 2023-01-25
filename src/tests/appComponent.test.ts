import { describe, it } from "vitest";

import { mount } from "@vue/test-utils";

import AppVue from "../App.vue";

describe("AppVue Test", () =>{
 
    it("App component render properly", async () => {
   
        const wrapper = mount(AppVue);

        expect(wrapper.html()).toMatchSnapshot();

        expect(wrapper.find("h3").text()).toEqual("M");
    
    });


});