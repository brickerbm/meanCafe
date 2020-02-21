import { Report } from '@entities';

export interface IReportDao {
    getAll: () => Promise<Report[]>;
    add: (report: Report) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

export class ReportDao implements IReportDao {
    public async getAll(): Promise<Report[]> {
        return [] as any;
    }

    public async add(report: Report): Promise<void> {
        return {} as any;
    }

    public async delete(id: string): Promise<void> {
        return{} as any;
    }
}