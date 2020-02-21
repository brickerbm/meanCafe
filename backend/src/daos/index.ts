const usingMockDb = (process.env.USE_MOCK_DB || '').toLowerCase();
let userDaoPath = './User/UserDao';
let reportDaoPath = './Report/ReportDao';

if (usingMockDb === 'true') {
    userDaoPath += '.mock';
    reportDaoPath += '.mock';
}

// tslint:disable:no-var-requires
export const { UserDao } = require(userDaoPath);
export const { ReportDao } = require(reportDaoPath);
