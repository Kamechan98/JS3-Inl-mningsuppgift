import { expect } from "vitest";
import matchers from '@testing-library/jest-dom'
import { cleanup } from "@testing-library/react";

expect.extend(matchers) //Extends the functionality from expect and adds other functions from @testing

afterEach(() => {   //after each test
    cleanup()       //cleanup - cleans up JSDOM after every test so they are independant of each other
}) 