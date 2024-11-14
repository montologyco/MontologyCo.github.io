// BudgetologyConfig.jsx

const BudgetologyConfig = () => {

    const sections = {
        accounts: {
            label: 'Accounts'
        },
        transactions: {
            label: 'Transactions'
        },
        recurring: {
            label: 'Recurring'
        },
        categories: {
            label: 'Categories'
        },
        contacts: {
            label: 'Contacts'
        }
    };

    return {
        sections
    };
};

export default BudgetologyConfig;