// page code for the hiScore page
import React, { useState } from 'react';
import ScoreBox from '../../components/ScoreBox';

function HiScore() {
    return (
        <div>
            <h2>Top 10 HiScores</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Robbert</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Vasu</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Kyle</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Goku</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>vegeta</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Picolo</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Adam Sandle</td>
                        <td>6 out of 6</td>
                    </tr>
                    <tr>
                        <td>Keanu Reeves</td>
                        <td>6 out of 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

export default HiScore;