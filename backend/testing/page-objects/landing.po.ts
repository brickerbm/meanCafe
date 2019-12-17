import {Selector, t} from 'testcafe';
import { environment } from '../environments';

export class LandingPage {

    basicAuthBtn = Selector('a').withText('Basic Auth');
    abTestingBtn = Selector('a').withText('A/B Testing');

    constructor() {}

    async goToBasicAuth() {
        await t.click(this.basicAuthBtn);
    }

    async goToABTesting() {
        await t.click(this.abTestingBtn);
    }
}