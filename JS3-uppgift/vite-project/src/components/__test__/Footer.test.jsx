import { render } from "react-dom";
import Footer from "../Footer";


describe('Footer', () => {

    it('should find a footer', async () => {
        render(<Footer title="My Footer" />)
        const headingElement = screen.getByRole('Footer')
        expect(headingElement).toBeInTheDocument();
    })

})