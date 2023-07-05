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

const { utilities: { QueryBuilder } } = require('../../../database');
const { DplDetectorRepository } = require('../../../database/repositories/index.js');

/**
 * Find and return a DPL detector model by its id
 *
 * @param {number} detectorId the id of the detector to find
 * @return {Promise<SequelizeDplDetector|null>} the DPL detector found or null
 */
exports.getDplDetector = (detectorId) => {
    const queryBuilder = new QueryBuilder().where('id').is(detectorId);
    return DplDetectorRepository.findOne(queryBuilder);
};