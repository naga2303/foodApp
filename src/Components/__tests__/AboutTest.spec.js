import { test, expect } from '@playwright/experimental-ct-react';
import About from "../About";
import Body from '../Body';
import ResCards from '../ResCards';
import Mock_Data from '../Mocks/resCardMock.json';
import { StoreWrapper } from '../StoreWrapper';



    test("Test the about us page",async({mount})=>{
        const component = await mount(<About />)
        await expect(component).toContainText('About Us Page')
    })

    test("To check the text value of the Buttons component ",async({mount})=>{
       const cartComponent = await mount (<Body  />)
       const rcvdButton = (await cartComponent.getByRole('button').allTextContents()).join(',')
       const button = "FindME!,Top Rated Restaurnants,AVADI,Clear"
        await expect(rcvdButton).toBe(button)
    })

    test("To check the restaurant name using mockdata in the page", async({mount})=>{
        
       const mockTest= await mount  (<ResCards resData={Mock_Data} />)
       const mockdata = await mockTest.getByText("Leon's - Burgers & Wings (Leon Grill)")
       console.log(mockdata)
       await expect(mockdata).toBeTruthy()
       
    })


    test("To verify the items in the Header", async({mount})=>{
        const hdrComponent = await mount (<StoreWrapper />);
      const txt = hdrComponent.locator('.companyName')
      await expect(txt).toHaveText('Just Order!!!')
      const cartText = hdrComponent.locator('.cartItemsClass')
      await expect(cartText).toHaveText('Carts -(0 items)')
    })

