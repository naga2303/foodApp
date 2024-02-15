import { test, expect } from '@playwright/experimental-ct-react';
import About from "../About";
import Body from '../Body';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Navigation} from '../Header';
import appStore from '../../Utils/appStore'
import ResCards from '../ResCards';
import Mock_Data from '../../Utils/MockData'

    test.skip("Test the about us page",async({mount})=>{
        const component = await mount(<About />)
        await expect(component).toContainText('About Us Page')
    })

    test("To check the text value of the Buttons component ",async({mount})=>{
       const cartComponent = await mount (<Body  />)
       const rcvdButton = (await cartComponent.getByRole('button').allTextContents()).join(',')
       const button = "FindME!,Top Rated Restaurnants,AVADI,Clear"
        await expect(rcvdButton).toBe(button)
    })

    test("To check the number of restaurants in the page", async({mount,page})=>{
        var MockData ="naga";
        await mount  (<ResCards resData={Mock_Data} />)
       
       
    })