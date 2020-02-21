import { IReportDao } from './reportDao';
import { MockDaoMock } from '../MockDb/MockDao.mock';
import { getRandomInt } from '@shared';
import { Report } from '@entities';

export class ReportDao extends MockDaoMock implements IReportDao {
    public async getAll(): Promise<Report[]> {
        try {
            const db = await super.openDb();
            return db.reports;
        } catch (err) {
            throw err;
        }
    }

    public async add(report: Report): Promise<void> {
        try {
            const db = await super.openDb();
            report.id = getRandomInt();
            db.reports.push(report);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.reports.length; i++) {
                if (db.reports[i].id === id) {
                    db.reports.splice(i, 1);
                    await super.saveDb(db);
                    return;
                }
            }
            throw new Error('Report not found');
        } catch (err) {
            throw err;
        }
    }
}