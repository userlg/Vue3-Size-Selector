import { toNumber } from "@vue/shared";

const user = {
    name: "Luis",
    color: "green"
}

test("Luis is green", () => {
     expect(user.name).toBe("Luis");
     expect(user.color).toBe("green");
});