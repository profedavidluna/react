self.onmessage = function(e) {
    const { principal, rate, years, monthlyContribution } = e.data;
    
    let total = principal;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    
    const results = [];
    
    for (let i = 1; i <= months; i++) {
        total = (total + monthlyContribution) * (1 + monthlyRate);
        
        if (i % 12 === 0 || i === months) {
            results.push({
                year: Math.ceil(i / 12),
                amount: total.toFixed(2)
            });
        }
    }
    
    self.postMessage(results);
};