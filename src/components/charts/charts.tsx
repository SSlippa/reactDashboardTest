import React, { useEffect, useState } from "react";
import PieChart, { IPieProps } from "./pie-chart";
import axios from "axios";
import { forkJoin } from 'rxjs';
import { fromPromise } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";

const Charts = () => {
    const [totalStats, setTotalStats] = useState<IPieProps[]>([]);
    const [localStats, setLocalStats] = useState<IPieProps[]>([]);

    function mapData(data: any) {
        let pieArr: IPieProps[] = [];

        Object.keys(data).forEach(key => {
            const pieData: IPieProps = {
                id: key,
                label: key,
                value: data[key]
            }
            pieArr.push(pieData)
        })

        return pieArr;
    }

    useEffect(() => {
        const fetchCoronaStats = () => {

            // total stats
            const headers = {
                'x-rapidapi-key': '2f7399978cmsh6ec58461b24e126p1dc514jsnb2eb95989a82',
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            };
            const totalStats = fromPromise(axios.get('https://covid-19-data.p.rapidapi.com/totals', {headers})).pipe(
                map(resp => {
                    return {
                        confirmed: resp.data[0].confirmed,
                        critical: resp.data[0].critical,
                        deaths: resp.data[0].deaths,
                        recovered: resp.data[0].recovered
                    }

                })
            );

            // local stats
            const params = {
                params: {country: 'Israel'},
                headers: {
                    'x-rapidapi-key': '2f7399978cmsh6ec58461b24e126p1dc514jsnb2eb95989a82',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
                }
            };
            const dailyStats = fromPromise(axios.get('https://covid-193.p.rapidapi.com/statistics', params)).pipe(
                map(resp => {
                    return {
                        active: resp.data.response[0].cases.active,
                        critical: resp.data.response[0].cases.critical,
                        recovered: resp.data.response[0].cases.recovered,
                        total: resp.data.response[0].cases.total,
                    }
                })
            )
            forkJoin([totalStats, dailyStats]).subscribe(resp => {
                setTotalStats(mapData(resp[0]))
                setLocalStats(mapData(resp[1]))
            })
        };
        fetchCoronaStats();

    }, []);

    return (
        <>
            <div className='chart-wrapper'>
                <h3>Global Stats</h3>
                <div className="chart">
                    <PieChart pieData={totalStats}/>
                </div>
            </div>
            <div className='chart-wrapper'>
                <h3>Israel Stats</h3>
                <div className="chart">
                    <PieChart pieData={localStats}/>
                </div>
            </div>
        </>
    )
}

export default Charts;
