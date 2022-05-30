


import { render, screen } from "@testing-library/react";
import { Image } from "../Components/Image";


describe("img test",function(){

    it.only("img  should present", () => {
        render(<Image alt="img" />);
        let img = screen.getByAltText("img")
        expect(img).toBeInTheDocument();
    });
    it.only("img  width should be", () => {
        render(<Image width="100px" alt="img" />);
        let img = screen.getByAltText("img")
        expect(img).toBe("100px")
    });

})

