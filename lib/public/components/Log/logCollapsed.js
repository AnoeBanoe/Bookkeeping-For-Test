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
import { replyButton } from './replyButton.js';

/**
 * A collection of fields to show per log detail, optionally with special formatting
 *
 * @return {Object} A key-value collection of all relevant fields
 */
const activeFields = () => ({
    id: {
        name: 'ID',
        visible: true,
    },
    author: {
        name: 'Source',
        visible: true,
        format: (author) => author && author.name ? author.name : '-',
    },
});

/**
 * Returns an expand button.
 *
 * @param {Log} log the log to expand
 * @param {function} onClick function called when button is activated
 * @return {Component} the expand button component
 */
const expandButton = (log, onClick) => h('a.btn.btn-primary', {
    id: `show-collapse-${log.id}`,
    style: 'float: right; margin-right: 5px',
    onclick: onClick,
}, 'Show');

/**
 * Returns a log's content display
 *
 * @param {Log} log the log to display
 * @param {function} onClick function called when the log's content is clicked
 * @return {Component} the log's content display
 */
const textBox = ({ text, id }, onClick) =>
    h(`a#log-id-${id}`, {
        style: 'text-decoration: none; color: black',
        onclick: onClick,
    }, h(`.text-ellipsis.w-100#log-content-${id}`, text));

/**
 * Displays a given log in short format
 *
 * @param {Log} log the log to display
 * @param {boolean} highlight indicator if this log should be highlighted
 * @param {function} onExpand function called when the log should be expanded
 * @return {Component} the log's display component
 */
export const logCollapsed = (log, highlight, onExpand) => {
    const logFields = activeFields();
    // eslint-disable-next-line require-jsdoc

    return h(`#log-${log.id}.w-100.flex-row.m1.shadow-level1`, [
        h(`.w-20.p2.shadow-level1${highlight ? '.bg-gray-light' : ''}`, [
            h('table', [
                h('tbody', Object.entries(logFields)
                    .map(([
                        key, {
                            name,
                            format,
                            visible,
                        },
                    ]) => visible && h(`tr#log-${log.id}-${key}`, [
                        h('td.text-right', { style: 'font-weight: bold' }, `${name}:`),
                        h('td', format ? format(log[key]) : log[key]),
                    ]))),
            ]),
        ]),
        h('.w-80.p2.shadow-level1', h('div.flex-wrap.justify-between.mv1', h(`h4#log-${log.id}-title`, log.title), h('div', [
            replyButton(log),
            expandButton(log, onExpand),
        ])), textBox(log, onExpand)),
    ]);
};