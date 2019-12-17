import { LandingPage } from "../page-objects/landing.po";
import { ABTestingPage } from "../page-objects/a-b-testing.po";
import { environment } from "../environments";

const landingPage = new LandingPage();
const ABPage = new ABTestingPage();

fixture`Landing Page`
    .page(environment.url);

    test('Navigate to A/B Testing page', async t => {
        await landingPage.goToABTesting();
        await t.expect(ABPage.headingText.innerText).contains('This is a way in which businesses are able to');
    })