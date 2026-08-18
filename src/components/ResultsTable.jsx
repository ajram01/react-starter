import {calculateInvestmentResults, formatter} from "../util/investment.js";

export function ResultsTable({annualInvest, expectedReturn, duration, initInvest}) {

   const results = calculateInvestmentResults({initialInvestment: initInvest, annualInvestment: annualInvest, expectedReturn: expectedReturn, duration: duration});

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(entry => (
                    <tr key={entry.year}>
                        <td>{entry.year}</td>
                        <td>{formatter.format(entry.valueEndOfYear)}</td>
                        <td>{formatter.format(entry.interest)}</td>
                        <td>{formatter.format(entry.interestEarned)}</td>
                        <td>{formatter.format(entry.annualInvestment)}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}