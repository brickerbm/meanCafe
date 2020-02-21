
import { ReportDao } from '@daos';
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';

// Init shared
const router = Router();
const reportDao = new ReportDao();

/******************************************************************************
 *                      Get All Reports - "GET /api/reports/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    try {
        const reports = await reportDao.getAll();
        return res.status(OK).json({reports});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Add One - "POST /api/reports/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    try {
        const { report } = req.body;
        if (!report) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await reportDao.add(report);
        return res.status(CREATED).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Update - "PUT /api/reports/update"
 ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     try {
//         const { report } = req.body;
//         if (!report) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         report.id = Number(report.id);
//         await reportDao.update(report);
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

/******************************************************************************
 *                    Delete - "DELETE /api/reports/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params as ParamsDictionary;
        await reportDao.delete(Number(id) || id);
        return res.status(OK).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
