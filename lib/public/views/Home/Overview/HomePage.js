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

import { h } from '/js/src/index.js';
import { logsActiveColumns } from '../../Logs/ActiveColumns/logsActiveColumns.js';
import { runsActiveColumns } from '../../Runs/ActiveColumns/runsActiveColumns.js';
import { table } from '../../../components/common/table/table.js';
import { estimateDisplayableRowsCount } from '../../../utilities/estimateDisplayableRowsCount.js';

const TABLEROW_HEIGHT = 46;
// Estimate of the navbar and pagination elements height total; Needs to be updated in case of changes;
const PAGE_USED_HEIGHT = 155;

/**
 * Home Page component
 * @param {Object} model global model
 * @return {Component} Return the component of the home page
 */
export const HomePage = ({ home: { logsOverviewModel, runsOverviewModel } }) => {
    const rowCount = estimateDisplayableRowsCount(TABLEROW_HEIGHT, PAGE_USED_HEIGHT);
    logsOverviewModel.pagination.provideDefaultItemsPerPage(rowCount);
    runsOverviewModel.pagination.provideDefaultItemsPerPage(rowCount);

    return h('.flex-row.w-100', [
        h('.flex-column.w-50', {
            style: 'padding-right: 1rem;',
        }, [
            h('h2', 'Log Entries'),
            table(logsOverviewModel.logs, logsActiveColumns, null, { profile: 'home' }),
        ]),
        h('.flex-column.w-50', [
            h('h2', 'Runs'),
            table(runsOverviewModel.runs, runsActiveColumns, null, { profile: 'home' }),
        ]),
    ]);
};