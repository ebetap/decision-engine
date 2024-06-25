class DecisionEngine {
    constructor(data) {
        this.data = data;
        this.rules = [];
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    evaluate() {
        return this.data.map(item => {
            let decisions = [];
            this.rules.forEach(rule => {
                if (rule.condition(item)) {
                    decisions.push(rule.decision);
                }
            });
            return {
                item,
                decisions
            };
        });
    }
}
