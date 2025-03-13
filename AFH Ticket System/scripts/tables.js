document.addEventListener("DOMContentLoaded", function () {
    const tablesContainer = document.querySelector(".tables-container");
    
    const tokenData = {
        earn: [
            { activity: "Complete a Project", reward: 15 },
            { activity: "Help Peer Complete a Project", reward: 10 },
            { activity: "Support a Client Project", reward: 10 },
            { activity: "Speak to Touring Group", reward: 10 },
            { activity: "Clean and Organize the Studio", reward: 10 },
            { activity: "Complete Task Before Due Date", reward: 5 },
            { activity: "Assist Someone on a Project", reward: 5 },
            { activity: "100% Attendance for the Week", reward: 3 }
        ],
        spend: [
            { item: "Raising Cane's Party", price: 100 },
            { item: "Pizza Party", price: 100 },
            { item: "Studio Movie Night", price: 50 },
            { item: "Studio Game Night", price: 50 },
            { item: "Miscellaneous", price: 20 }
        ]
    };
    
    function createTable(data, title, column1, column2) {
        let tableHTML = `<div class="card table">
            <div class="card-body">
                <table>
                    <tbody>
                        <tr>
                            <th>${title}</th>
                            <th>${column2}</th>
                        </tr>`;
        
        data.forEach(entry => {
            tableHTML += `<tr>
                <td>${entry[column1]}</td>
                <td>${entry[column2]} Tokens</td>
            </tr>`;
        });
        
        tableHTML += `</tbody></table></div></div>`;
        return tableHTML;
    }
    
    tablesContainer.innerHTML = 
        createTable(tokenData.earn, "Examples of Ways to Earn Tokens", "activity", "reward") +
        createTable(tokenData.spend, "Examples of Ways to Spend Tokens", "item", "price");
});