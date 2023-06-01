import { render, screen } from "@testing-library/react";
import Footer from "../Footer";


describe('Footer', () => {

    it('should find a footer', async () => {
        render(<Footer title="My Footer" />)
        const headingElement = screen.getByTestId('footer')
        expect(headingElement).toBeInTheDocument();
    })

})