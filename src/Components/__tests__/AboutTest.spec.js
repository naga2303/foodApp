import { test, expect } from '@playwright/experimental-ct-react';
import About from "../About";
import ResCards from '../ResCards';

    test.skip("Test the about us page",async({mount})=>{
        const component = await mount(<About />)

        await expect(component).toContainText('About Us Page')
    })

    test("To click the Restaurant card ",async({mount})=>{
        const resComponent = await mount(<ResCards />)
        await expect(resComponent).toHaveCount(6)
    })