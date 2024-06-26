/**
 * @license
 * Copyright CERN and copyright holders of ALICE O2. This software is
 * distributed under the terms of the GNU General Public License v3 (GPL
 * Version 3), copied verbatim in the file "COPYING".
 *
 * See http://alice-o2.web.cern.ch/license for full licensing information.
 *
 * In applying this license CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */

const { DplProcessController } = require('../controllers/dplProcess.controller.js');

exports.dplProcessRouter = {
    method: 'get',
    path: '/dpl-process',
    children: [
        {
            method: 'get',
            path: '/detectors',
            controller: DplProcessController.getAllDplDetectorsWithExecutedProcessesByRunHandler,
        },
        {
            method: 'get',
            path: '/processes',
            controller: DplProcessController.getAllExecutedProcessesByRunAndDplDetectorHandler,
        },
        {
            method: 'get',
            path: '/hosts',
            controller: DplProcessController.getAllHostsWithExecutedProcessByRunAndDplDetectorHandler,
        },
        {
            method: 'get',
            path: '/executions',
            controller: DplProcessController.getAllProcessExecutionByRunAndDplDetectorAndHostHandler,
        },
    ],
};
